import React, { useEffect } from 'react'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'
import WalletAddress from '../../components/WalletAddress'
import Box from '../../components/Box'
import CoinBalance from '../../components/CoinBalance'
import { initialCoins } from '../../services/tokens/contants'
import { ReactComponent as ArrowIcon } from '../../assets/svg/submit-arrow.svg'
import * as S from './styled'
import Transfers from './components/Transfers'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import useSWR from 'swr'
import { COVALENT_API_KEY } from '../../services/fetcher/constants'
import fetcher from '../../services/fetcher'
import { useParams } from 'react-router-dom'

const TransferLink = ({ symbol }) => {
  return (
    <>
      <S.TransferText className="primary">Transfer {symbol}</S.TransferText>
      <ArrowIcon />
    </>
  )
}

// TODO: The provider of the transfers endpoint (current convalent) needs to be refactored
// to use a proxy or facet pattern, so we can use the same interface for multiple providers
function TransferBalance() {
  const { saveSession } = useAuthentication()
  const { accounts } = useContextSelector(WalletContext, (s) => s[0])
  let { symbol } = useParams()

  //TODO: We need to change the endpoint when another networks are added
  const { data } = useSWR(
    `https://api.covalenthq.com/v1/1/address/${accounts[0].address}/transactions_v2/?&key=${COVALENT_API_KEY}`,
    (...args) => fetcher(...args).then(({ data }) => data)
  )

  useEffect(() => {
    saveSession()
  }, [saveSession])

  return (
    <Layout>
      <WalletAddress />

      <Box className="wallet-container">
        <CoinBalance item={initialCoins.ETH} icon={<TransferLink />} />

        <Transfers items={data?.items} symbol={symbol} />
      </Box>
    </Layout>
  )
}

export default TransferBalance
