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
