import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { format } from 'date-fns'
import { ReactComponent as ReceiveTransfer } from '../../../assets/svg/received-transfer.svg'
import { ReactComponent as SendTransfer } from '../../../assets/svg/send-transfer.svg'
import { WalletContext } from '../../../contexts/wallet/WalletProvider'

import * as S from './styled'
import Web3Service from '../../../services/web3'
import { networksExplorer } from '../../../services/fetcher/constants'
import { NetworkContext } from '../../../contexts/network/NetworkProvider'

const getInfo = (item, address) => {
  const isSender = item.from_address === address
  const targetAddress = item[isSender ? 'to_address' : 'from_address']
  return `${format(new Date(item.block_signed_at), 'MMM d')} 
    ${isSender ? 'to' : 'from'}: ${targetAddress.slice(
    0,
    4
  )}...${targetAddress.slice(-4)}`
}

// TODO: Add a loading state for the requests
function Transfers({ items, symbol, isMainNet }) {
  const { accounts } = useContextSelector(WalletContext, (s) => s[0])
  const activeChain = useContextSelector(
    NetworkContext,
    (s) => s[0].activeChain
  )
  const address = accounts[0].address.toLowerCase()
  const web3 = Web3Service.getInstance()

  if (!items) return null

  const handleTransferClick = (txHash) => () => {
    window.open(`${networksExplorer[activeChain]}/tx/${txHash}`, '_blank')
  }

  const filteredItems = isMainNet
    ? items.filter((item) => item.value_quote !== 0)
    : items.filter((item) => item.transfers.length)

  return (
    <S.TransferBoxOverflow>
      {filteredItems.map((item) => (
        <S.TransferItem
          key={item.tx_hash}
          image={
            item.from_address === address ? (
              <SendTransfer />
            ) : (
              <ReceiveTransfer />
            )
          }
          onClick={handleTransferClick(item.tx_hash)}
          label={`${web3.utils
            .fromWei(isMainNet ? item.value : item.transfers[0].delta, 'ether')
            .slice(0, 11)} ${symbol}`}
          title="view transaction"
          description={getInfo(item, address)}
        />
      ))}
    </S.TransferBoxOverflow>
  )
}

export default Transfers
