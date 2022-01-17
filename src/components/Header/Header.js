import React from 'react'
import logo from '../../assets/svg/logo.svg'
import { ReactComponent as ArrowIcon } from '../../assets/svg/select-arrow.svg'
import { Link } from 'react-router-dom'

import * as S from './styled'
import { useContextSelector } from 'use-context-selector'
import { NetworkContext } from '../../contexts/network/NetworkProvider'
import { setActiveChain } from '../../contexts/network/actions'

function Header({ address }) {
  const [{ activeChain, networks }, dispatch] = useContextSelector(
    NetworkContext,
    (state) => state
  )

  const handleNetowrkChange = (e) => {
    dispatch(setActiveChain(e.target.value))
  }

  return (
    <S.Header>
      <h1>
        <Link to="/wallet">
          <S.HeaderLogo src={logo} alt="nevinha wallet logo" />
        </Link>
      </h1>

      <S.HeaderSelectContainer>
        <S.HeaderSelect value={activeChain} onChange={handleNetowrkChange}>
          {Object.keys(networks).map((network) => (
            <option value={network} key={network}>
              {networks[network].label}
            </option>
          ))}
        </S.HeaderSelect>

        <ArrowIcon />
      </S.HeaderSelectContainer>

      <div>
        {/* TODO: Add dropdown menu here */}
        <S.HeaderAvatar text={address} />
      </div>
    </S.Header>
  )
}

export default Header
