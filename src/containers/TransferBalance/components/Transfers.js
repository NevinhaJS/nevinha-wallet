import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { format } from 'date-fns'
import { ReactComponent as ReceiveTransfer } from '../../../assets/svg/received-transfer.svg'
import { ReactComponent as SendTransfer } from '../../../assets/svg/send-transfer.svg'
import { WalletContext } from '../../../contexts/wallet/WalletProvider'

import * as S from './styled'
import Web3Service from '../../../services/web3'

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
function Transfers({ items, symbol }) {
  const { accounts } = useContextSelector(WalletContext, (s) => s[0])
  const address = accounts[0].address.toLowerCase()
  const web3 = Web3Service.getInstance()

  if (!items) return null

  const handleTransferClick = (txHash) => () => {
    window.open('https://etherscan.io/tx/' + txHash, '_blank')
  }

  return (
    <S.TransferBoxOverflow>
      {items
        .filter((item) => item.value_quote !== 0) // Find a way to discover the transfer type, eg if its a token transfer or a eth transaction
        .map((item) => (
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
              .fromWei(item.value, 'ether')
              .slice(0, 11)} ${symbol}`}
            title="view transaction"
            description={getInfo(item, address)}
          />
        ))}
    </S.TransferBoxOverflow>
  )
}

export default Transfers
