import React, { useContext } from 'react'
import { useActor } from '@xstate/react'
import { ReactComponent as CheckIcon } from '../../../assets/svg/check.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-back.svg'
import {
  CircleBox,
  SuccessBlock,
  SuccessContainer,
  FeedbackText,
  ToWallet,
} from '../styled'
import { MultiStepContext } from '../../../infra/MultiStepForm/MultiStepForm'
import { Link } from 'react-router-dom'

function Success() {
  const multiStepContext = useContext(MultiStepContext)
  const [state] = useActor(multiStepContext.authService)

  return (
    <SuccessContainer>
      <SuccessBlock>
        <CircleBox>
          <CheckIcon />
        </CircleBox>

        <FeedbackText size={30}>Transaction sent!</FeedbackText>
        <FeedbackText as="a" href="#" className="primary">
          view transaction
        </FeedbackText>

        <ToWallet $noLine as={Link} to="/wallet" className="primary">
          <ArrowIcon /> To the wallet
        </ToWallet>
      </SuccessBlock>
    </SuccessContainer>
  )
}

export default Success
