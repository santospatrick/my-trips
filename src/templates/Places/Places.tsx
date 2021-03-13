import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { Place } from 'graphql/generated/graphql'
import * as Styled from './styles'
import { NextSeo } from 'next-seo'

export type PlaceTemplateProps = {
  place: Place
}

function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show my favorite spots in the world.'
        }
        canonical="https://my-trips.santospatrick.com"
        openGraph={{
          url: 'https://my-trips.santospatrick.com',
          title: `${place.name} - My Trips`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width || 1280,
              height: place.gallery[0].height || 720,
              alt: `${place.name}`,
            },
          ],
        }}
      />
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
