import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: min(34px, 30vw) auto;
  grid-template-rows: auto;
  padding: min(20px, 10vh) min(30px, 6vw);
  align-items: center;
  grid-column-gap: min(30px, 6vw);

  p {
    font-size: min(18px, 4vw);
    margin: 0;

    &:first-child {
      margin-bottom: 7px;
    }
  }
`
