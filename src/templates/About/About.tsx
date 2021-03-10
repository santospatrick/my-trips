import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as Styled from './styles'

function About() {
  return (
    <Styled.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <Styled.Heading>My Trips</Styled.Heading>

      <Styled.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          molestiae, exercitationem veniam excepturi nam sint quam iste
          blanditiis deserunt consectetur quae eligendi obcaecati non temporibus
          rem aliquam officia qui magni.
        </p>
      </Styled.Body>
    </Styled.Content>
  )
}

export default About
