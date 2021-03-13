import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show my favorite spots in the world."
        canonical="https://my-trips.santospatrick.com"
        openGraph={{
          url: 'https://my-trips.santospatrick.com',
          images: [
            {
              url: 'https://my-trips.santospatrick.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

export default HomeTemplate
