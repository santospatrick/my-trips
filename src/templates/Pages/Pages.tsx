import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as Styled from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <Styled.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <Styled.Heading>{heading}</Styled.Heading>

      <Styled.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Styled.Body>
    </Styled.Content>
  )
}

export default PageTemplate
