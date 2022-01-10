import React, { useContext, useEffect } from 'react'
import { useActor } from '@xstate/react'
import { useForm } from 'react-hook-form'
import BigNumber from 'bignumber.js'

import CoinBalance from '../../../components/CoinBalance'
import { MultiStepContext } from '../../../infra/MultiStepForm/MultiStepForm'
import Web3Service from '../../../services/web3'
import Estimation from './components/Estimation'
import FeesFields from './components/FeesFields'

import { FeedbackText, FeesBox } from '../styled'
import { initialCoins } from '../../../services/fetcher/constants'
import { useParams } from 'react-router-dom'
import TokensService from '../../../services/tokens'
import { defaultNetworkAddress } from '../../../services/tokens/contants'

import useStrategies from './hooks/useStrategies'
import { defaultTokenStrategy, erc20Strategy } from './strategies'

function Fees({ onSubmit }) {
  const multiStepContext = useContext(MultiStepContext)
  const [state] = useActor(multiStepContext.authService)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm()
  const fee = watch('fee')
  const { symbol } = useParams()

  const isMainNet = initialCoins[symbol].address === defaultNetworkAddress

  const { execute, getGasInfo } = useStrategies(
    isMainNet ? defaultTokenStrategy : erc20Strategy(symbol)
  )

  useEffect(() => {
    ;(async () => {
      const web3 = Web3Service.getInstance()
      const { estimatedGas, gasPrice } = await getGasInfo()

      const bigGasPrice = BigNumber(estimatedGas)
      const fee = web3.utils.fromWei(
        bigGasPrice.multipliedBy(gasPrice).toString(),
        'ether'
      )

      setValue('fee', fee)
    })()
  }, [state, setValue, getGasInfo])

  const onSendTransaction = async () => {
    const web3 = Web3Service.getInstance()
    const signedTx = await execute(symbol, isMainNet)

    try {
      await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

      onSubmit({ fee })
    } catch (e) {
      console.log('Deu ruim')
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSendTransaction)}>
      <FeesBox className="wallet-container">
        <CoinBalance item={TokensService.getToken(symbol)} />

        <p className="primary">
          <span className="light">To: </span>
          {state.context.form?.INFO?.address}
        </p>

        <p className="primary">
          <span className="light">Amount: </span>
          {state.context.form?.INFO?.amount} {symbol}
        </p>

        {isSubmitting && (
          <Estimation
            symbol={symbol}
            isMainNet={isMainNet}
            fee={fee}
            amount={state.context.form?.INFO?.amount}
          />
        )}
      </FeesBox>

      {isSubmitting ? (
        <FeedbackText className="primary">Sending transaction...</FeedbackText>
      ) : (
        <FeesFields errors={errors} register={register} />
      )}
    </form>
  )
}

export default Fees
