import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            name: 'Curitiba',
            slug: 'curitiba',
            location: {
              latitude: 0,
              longitude: 0,
            },
          },
          {
            id: '2',
            name: 'São Paulo',
            slug: 'sao-paulo',
            location: {
              latitude: 10,
              longitude: 10,
            },
          },
        ]}
      />
    </>
  )
}

export default Home
