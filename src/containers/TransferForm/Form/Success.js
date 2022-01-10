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
import { BLOCKCHAIN_EXPLORER_LINK } from '../../../services/fetcher/constants'

function Success() {
  const multiStepContext = useContext(MultiStepContext)
  const [{ context }] = useActor(multiStepContext.authService)
  const { transactionHash } = context.form.FEES.transaction

  return (
    <SuccessContainer>
      <SuccessBlock>
        <CircleBox>
          <CheckIcon />
        </CircleBox>

        <FeedbackText size="min(23px, 7vw)">Transaction sent!</FeedbackText>
        <FeedbackText
          as="a"
          href={`${BLOCKCHAIN_EXPLORER_LINK}/tx/${transactionHash}`}
          target="_blank"
          className="primary"
        >
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
