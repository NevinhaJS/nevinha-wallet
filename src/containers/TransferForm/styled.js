import styled from 'styled-components'
import Box from '../../components/Box'
import Input from '../../components/Input'

export const TransferFormContainer = styled.div`
  max-width: min(431px, 80vw);
  margin: 0 auto;

  ${Box} {
    margin-bottom: 40px;
  }
`

export const TransferFormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 0.8rem;
  display: block;
`

export const TransferFormInput = styled(Input)`
  margin-bottom: 2rem;
`

export const FeesBox = styled(Box)`
  padding: 0.5rem 0 2rem;

  div:first-child {
    border: none;
  }

  > p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 min(30px, 6vw);
    margin-bottom: 0;
  }

  > p,
  > p span {
    font-size: 18px;
  }
`
