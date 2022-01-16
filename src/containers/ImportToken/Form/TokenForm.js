import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { useNavigate } from 'react-router-dom'

import { ERC20_ABI } from '../../../services/tokens/constants'
import { TokensContext } from '../../../contexts/tokens/TokensProvider'
import { NetworkContext } from '../../../contexts/network/NetworkProvider'
import { addToken } from '../../../contexts/tokens/actions'
import Web3Service from '../../../services/web3'

import { TransferFormInput, TransferFormLabel } from '../styled'

function TokenForm() {
  const [oneInchTokens, dispatch] = useContextSelector(
    TokensContext,
    (state) => [state[0].oneInch, state[1]]
  )
  const activeChain = useContextSelector(
    NetworkContext,
    (state) => state[0].activeChain
  )
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
  })
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(addToken(activeChain, data))
    navigate('/wallet')
  }

  const validateAddress = async (address) => {
    const web3 = Web3Service.getInstance()

    try {
      const contract = new web3.eth.Contract(ERC20_ABI, address)

      setLoading(true)

      const symbol = await contract.methods.symbol().call()
      const decimals = await contract.methods.decimals().call()
      const name = await contract.methods.name().call()

      setValue('symbol', symbol)
      setValue('decimals', decimals)
      setValue('name', name)

      const tokenAddress = Object.keys(oneInchTokens).find(
        (key) => oneInchTokens[key].symbol === symbol
      )

      if (tokenAddress) {
        setValue('logoURI', oneInchTokens[tokenAddress].logoURI)
      }

      setLoading(false)
    } catch (err) {
      console.log(err)
      if (loading) setLoading(false)

      setValue('symbol', '')
      setValue('decimals', '')

      return 'Invalid token address'
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TransferFormLabel htmlFor="address" className="light">
        Token contract address
      </TransferFormLabel>
      <TransferFormInput
        id="address"
        type="text"
        placeholder="0x00000000000000"
        name="address"
        required={'Token contract is required'}
        register={register}
        validate={validateAddress}
        errors={errors}
      />

      <TransferFormLabel htmlFor="symbol" className="light">
        Token symbol
      </TransferFormLabel>
      <TransferFormInput
        id="symbol"
        type="text"
        name="symbol"
        placeholder={
          loading ? 'loading tokens...' : 'token symbol will be displayed here'
        }
        required={'Token symbol is required'}
        register={register}
        disabled
        errors={errors}
      />

      <TransferFormLabel htmlFor="decimals" className="light">
        Token decimals
      </TransferFormLabel>
      <TransferFormInput
        id="decimals"
        type="text"
        disabled
        name="decimals"
        placeholder={
          loading
            ? 'loading decimals...'
            : 'token decimal will be displayed here'
        }
        required={'token decimal is required'}
        register={register}
        errors={errors}
      />

      <button>Continue</button>
    </form>
  )
}

export default TokenForm
