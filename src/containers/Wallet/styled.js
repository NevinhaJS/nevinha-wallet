import styled from 'styled-components'

export const WalletHeader = styled.header`
  margin-top: 10vh;

  h1 {
    font-weight: 400;
    word-break: break-word;
    padding: 0 min(44px, 5vw);
  }

  span {
    display: inline-block;
    margin-top: 4px;
  }
`

export const WalletBalances = styled.article`
  max-width: min(431px, 80vw);
  margin: 0 auto;
`
