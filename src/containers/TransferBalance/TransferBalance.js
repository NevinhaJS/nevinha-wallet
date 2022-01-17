import React, { useEffect } from 'react'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'
import WalletAddress from '../../components/WalletAddress'
import Box from '../../components/Box'
import CoinBalance from '../../components/CoinBalance'
import { ReactComponent as ArrowIcon } from '../../assets/svg/submit-arrow.svg'
import * as S from './styled'
import Transfers from './components/Transfers'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import useSWR from 'swr'
import { COVALENT_API_KEY } from '../../services/fetcher/constants'
import fetcher from '../../services/fetcher'
import { useNavigate, useParams } from 'react-router-dom'
import {
  defaultNetworkAddress,
  ERC20_ABI,
} from '../../services/tokens/constants'
import { useActiveChainTokensSelector } from '../../contexts/tokens/selectors'
import { NetworkContext } from '../../contexts/network/NetworkProvider'

const TransferLink = ({ symbol }) => {
  return (
    <>
      <S.TransferText className="primary">Transfer {symbol}</S.TransferText>
      <ArrowIcon />
    </>
  )
}

const getTransfersEndpoint = (
  { isMainNet, accounts, symbol },
  { tokens, activeChain }
) => {
  if (isMainNet)
    return `https://api.covalenthq.com/v1/${activeChain}/address/${accounts[0].address}/transactions_v2/?&key=${COVALENT_API_KEY}`

  return `https://api.covalenthq.com/v1/${activeChain}/address/${accounts[0].address}/transfers_v2/?contract-address=${tokens[symbol].address}&key=${COVALENT_API_KEY}`
}

// TODO: The provider of the transfers endpoint (current convalent) needs to be refactored
// to use a proxy or facet pattern, so we can use the same interface for multiple providers
function TransferBalance() {
  const { saveSession } = useAuthentication()
  const { accounts } = useContextSelector(WalletContext, (s) => s[0])
  const activeChain = useContextSelector(
    NetworkContext,
    (s) => s[0].activeChain
  )
  const tokens = useActiveChainTokensSelector()
  const navigate = useNavigate()
  const { symbol } = useParams()

  const isMainNet = tokens[symbol].address === defaultNetworkAddress
  const item = isMainNet
    ? tokens[symbol]
    : { ...tokens[symbol], abi: ERC20_ABI }

  const { data } = useSWR(
    getTransfersEndpoint(
      { isMainNet, accounts, symbol },
      { activeChain, tokens }
    ),
    (...args) => fetcher(...args).then(({ data }) => data)
  )

  const handleBalanceClick = () => navigate(`/wallet/transfer/${symbol}/form`)

  useEffect(() => {
    saveSession()
  }, [saveSession])

  return (
    <Layout>
      <WalletAddress />

      <Box className="wallet-container">
        <CoinBalance
          onClick={handleBalanceClick}
          item={item}
          icon={<TransferLink />}
        />

        <Transfers isMainNet={isMainNet} items={data?.items} symbol={symbol} />
      </Box>
    </Layout>
  )
}

export default TransferBalance
