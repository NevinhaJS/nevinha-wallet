import { useActor } from '@xstate/react'
import React, { useContext, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import CoinBalance from '../../../components/CoinBalance'
import { MultiStepContext } from '../../../infra/MultiStepForm/MultiStepForm'
import { initialCoins } from '../../../services/tokens/contants'
import Web3Service from '../../../services/web3'
import BigNumber from 'bignumber.js'

import { FeesBox, TransferFormInput, TransferFormLabel } from '../styled'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../../contexts/wallet/WalletProvider'

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
    formState: { errors, isSubmitting },
    setValue,
  } = useForm()

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
  }, [wallet, state])

  const onSendTransaction = async () => {
    const account = wallet.accounts[0]
    const web3 = Web3Service.getInstance()
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

      onSubmit({ fee, amount })
    } catch (e) {
      console.log('Deu ruim')
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSendTransaction)}>
      <FeesBox className="wallet-container">
        <CoinBalance item={initialCoins.ETH} />

        <p className="primary">
          <span className="light">To: </span>
          {state.context.form?.INFO?.address}
        </p>
        <p className="primary">
          <span className="light">Amount: </span>
          {state.context.form?.INFO?.amount}
        </p>
      </FeesBox>

      <TransferFormLabel htmlFor="fee" className="light">
        Estimated fee
      </TransferFormLabel>
      <TransferFormInput
        id="fee"
        type="text"
        placeholder="0.0001 ETH"
        name="fee"
        required={'fee is required'}
        register={register}
        errors={errors}
        disabled
      />
      {/* 
      <TransferFormLabel htmlFor="maxFee" className="light">
        Max fee
      </TransferFormLabel>
      <TransferFormInput
        id="maxFee"
        type="text"
        placeholder="0 ETH"
        name="maxFee"
        required={'max fee is required'}
        register={register}
        errors={errors}
      /> */}

      <button>{isSubmitting ? 'Sending...' : 'Confirm'}</button>
    </form>
  )
}

export default Fees
