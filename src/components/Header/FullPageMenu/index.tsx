import { FC } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'

import { LanguageSwitcher } from '../LanguageSwitcher'
import { Container, VerticalList, Title, CloseMenu } from './styles'

interface Props {
  active: boolean
  close(): void
}

export const FullPageMenu: FC<Props> = ({ active, close, children }) => {
  return (
    <Container active={active}>
      <Title>Menu</Title>
      <VerticalList>{children}</VerticalList>

      <LanguageSwitcher close={close} />
      <CloseMenu onClick={close}>
        <AiOutlineCloseCircle size={30} color="#fff" />{' '}
      </CloseMenu>
    </Container>
  )
}
