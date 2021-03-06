import React from 'react'
import { useContextSelector } from 'use-context-selector'
import Header from '../../components/Header'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import * as S from './styled'

function Layout({ children, className }) {
  const wallet = useContextSelector(WalletContext, (state) => state[0])

  return (
    <>
      <Header address={wallet.accounts[0].address} />

      <S.LayoutSection className={className}>{children}</S.LayoutSection>
    </>
  )
}

export default Layout
