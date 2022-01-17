import styled from 'styled-components'
import Input from '../../components/Input'
import Layout from '../../infra/Layout'

export const ImportLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

export const ImportTokenContainer = styled.div`
  max-width: min(431px, 80vw);
  margin: 0 auto;
  padding-bottom: 1rem;
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;

  form {
    width: 100%;
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

export const FeedbackText = styled.p`
  font-size: ${({ size }) => size || 'min(23px, 5vw)'};
  text-align: center;
  margin-bottom: 12px;
  text-decoration: ${({ as, $noLine }) =>
    $noLine || as !== 'a' ? 'none' : 'underline'};
`
