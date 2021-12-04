import styled from 'styled-components'
import Avatar from '../Avatar'

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: min(24px, 3vh) min(44px, 5vw);

  h1 {
    margin: 0;
  }
`

export const HeaderLogo = styled.img`
  width: min(37px, 6vw);
`

export const HeaderSelectContainer = styled.div`
  max-width: min(216px, 50vw);
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 14px;
    right: 1rem;
  }
`

export const HeaderAvatar = styled(Avatar)`
  border-radius: 50%;
  border: solid 3px var(--primary);
  width: min(56px, 11vw);
`

export const HeaderSelect = styled.select`
  border-radius: 12px;
  height: 38px;
  color: var(--light);
  font-size: 18px;
  padding: 0 min(1.5rem, 3vw);
  border: solid 1px var(--primary-bd);
  cursor: pointer;
`
