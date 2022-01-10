import styled from 'styled-components'
import Box from '../../components/Box'
import Input from '../../components/Input'

export const TransferFormContainer = styled.div`
  max-width: min(431px, 80vw);
  margin: 0 auto;
  padding-bottom: 1rem;

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

export const FeedbackText = styled.p`
  font-size: min(${({ size }) => size || 23}px, 3vw);
  text-align: center;
  margin-bottom: 12px;
  text-decoration: ${({ as, $noLine }) =>
    $noLine || as !== 'a' ? 'none' : 'underline'};
`

export const SuccessContainer = styled.div`
  height: 64vh;
  justify-content: center;
  display: flex;
  align-items: center;
`

export const SuccessBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  && > div {
    margin-bottom: 0;
  }
`

export const CircleBox = styled(Box)`
  width: min(17vw, 144px);
  height: min(17vw, 144px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #141414;
  justify-content: center;

  svg {
    width: 100%;
  }
`

export const ToWallet = styled(FeedbackText)`
  margin-top: 48px;
`
