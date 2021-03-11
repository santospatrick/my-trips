import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { Place } from 'graphql/generated/graphql'
import * as Styled from './styles'

export type PlaceTemplateProps = {
  place: Place
}

function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Heading>{place.name}</Styled.Heading>
          <Styled.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <Styled.Gallery>
            {place.gallery.map((item) => (
              <Image
                width={1000}
                height={600}
                quality={75}
                objectFit="cover"
                key={item.url}
                src={item.url}
                alt={place.name}
              />
            ))}
          </Styled.Gallery>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  )
}

export default PlaceTemplate
