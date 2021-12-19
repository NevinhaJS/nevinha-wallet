import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: min(34px, 30vw) 1fr auto;
  grid-template-rows: auto;
  padding: min(20px, 10vh) min(30px, 6vw);
  align-items: center;
  grid-column-gap: min(30px, 6vw);

  p {
    font-size: min(14px, 4vw);
    margin: 0;

    &:first-child {
      font-size: min(18px, 5vw);
      margin-bottom: 7px;
    }
  }
`

export const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
