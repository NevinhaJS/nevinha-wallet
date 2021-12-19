import styled from 'styled-components'

export const TransferText = styled.p`
  &&:first-child {
    font-size: min(20px, 4vw);
    margin: 0;
    margin-right: min(1rem, 2vw);
  }

  &:hover {
    text-decoration: underline;
  }
`
