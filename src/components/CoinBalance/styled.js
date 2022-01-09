import styled from 'styled-components'
import Item from '../Item'

export const CoinBalanceItem = styled(Item)`
  border-bottom: solid 1px var(--primary);
  position: relative;
  cursor: pointer;

  &:hover svg {
    transform: translateX(0.5vw);
  }

  svg {
    width: 8px;
    transition: all ease-out 0.3s;

    path {
      stroke-width: 6px;
    }
  }

  img {
    width: 100%;
  }
`
