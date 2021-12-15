import styled from 'styled-components'
import { ReactComponent as ArrowIcon } from '../../assets/svg/submit-arrow.svg'
import Item from '../Item'

export const CoinBalanceItem = styled(Item)`
  border-bottom: solid 1px var(--primary);
  position: relative;
  cursor: pointer;

  &:hover svg {
    transform: translateX(0.5vw);
  }
`

export const CoinArrowIcon = styled(ArrowIcon)`
  width: 8px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -1rem;
  transition: all ease-out 0.3s;

  path {
    stroke-width: 6px;
  }
`
