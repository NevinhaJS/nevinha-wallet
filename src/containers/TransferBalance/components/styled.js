import styled from 'styled-components'
import Item from '../../../components/Item'

export const TransferBoxOverflow = styled.div`
  max-height: min(300px, 30vh);
  overflow: auto;

  &&::-webkit-scrollbar {
    width: 4px;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 40px;
  }
`

export const TransferItem = styled(Item)`
  grid-column-gap: min(15px, 6vw);
  cursor: pointer;
  border-bottom: solid 1px var(--primary-bd);
  background: transparent;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--dark);
  }
`
