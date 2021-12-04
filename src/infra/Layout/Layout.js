import React from 'react'
import Header from '../../components/Header'
import * as S from './styled'

function Layout({ children }) {
  return (
    <>
      <Header />

      <S.LayoutSection>{children}</S.LayoutSection>
    </>
  )
}

export default Layout
