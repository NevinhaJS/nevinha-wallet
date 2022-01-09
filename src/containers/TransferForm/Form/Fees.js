import React, { useContext, useEffect } from 'react'
import { useActor } from '@xstate/react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import BigNumber from 'bignumber.js'

import CoinBalance from '../../../components/CoinBalance'
import { MultiStepContext } from '../../../infra/MultiStepForm/MultiStepForm'
import Web3Service from '../../../services/web3'
import { WalletContext } from '../../../contexts/wallet/WalletProvider'
import Estimation from './components/Estimation'
import FeesFields from './components/FeesFields'

import { FeedbackText, FeesBox } from '../styled'
import { initialCoins } from '../../../services/fetcher/constants'
import { useParams } from 'react-router-dom'
import TokensService from '../../../services/tokens'
import { defaultNetworkAddress } from '../../../services/tokens/contants'

const getTransactionData = async (stateMachine, account) => {
  const web3 = Web3Service.getInstance()
  const txCount = await web3.eth.getTransactionCount(account.address, 'latest')
  const { amount, address } = stateMachine.context.form?.INFO

  return {
    to: address,
    nonce: web3.utils.toHex(txCount),
    value: web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
  }
}

const getTransactionGasInfo = async (stateMachine, wallet) => {
  const web3 = Web3Service.getInstance()
  const account = wallet.accounts[0]
  const transactionData = await getTransactionData(stateMachine, account)
  const estimatedGas = await web3.eth.estimateGas(transactionData)
  const gasPrice = await web3.eth.getGasPrice()

  return {
    estimatedGas,
    gasPrice,
  }
}

function Fees({ onSubmit }) {
  const wallet = useContextSelector(WalletContext, (s) => s[0])
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

  useEffect(() => {
    ;(async () => {
      const web3 = Web3Service.getInstance()
      const { estimatedGas, gasPrice } = await getTransactionGasInfo(
        state,
        wallet
      )

      const bigGasPrice = BigNumber(estimatedGas)
      const fee = web3.utils.fromWei(
        bigGasPrice.multipliedBy(gasPrice).toString(),
        'ether'
      )

      setValue('fee', fee)
    })()
  }, [wallet, state, setValue])

  const onSendTransaction = async () => {
    const account = wallet.accounts[0]
    const web3 = Web3Service.getInstance()

    if (!isMainNet) {
      alert('Current we just support mainnet transfers!')
      return
    }

    const gasLimit = await web3.eth.getBlock('latest').gasLimit
    const { amount } = state.context.form?.INFO
    const transactionData = await getTransactionData(state, account)
    const { estimatedGas, gasPrice } = await getTransactionGasInfo(
      state,
      wallet
    )

    const signedTx = await web3.eth.accounts.signTransaction(
      {
        ...transactionData,
        gasLimit: web3.utils.toHex(gasLimit),
        gasPrice: web3.utils.toHex(gasPrice),
        gas: web3.utils.toHex(estimatedGas),
      },
      account.privateKey
    )

    try {
      console.log('sending...')

      await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

      const bigGasPrice = BigNumber(estimatedGas)
      const fee = web3.utils.fromWei(
        bigGasPrice.multipliedBy(gasPrice).toString(),
        'ether'
      )

      console.log('Transaction sent: ')
      console.table({
        fee,
        amount,
        gasPrice,
        total: Math.abs(fee) + Math.abs(amount),
      })

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
          {state.context.form?.INFO?.amount}
        </p>

        {isSubmitting && (
          <Estimation fee={fee} amount={state.context.form?.INFO?.amount} />
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
