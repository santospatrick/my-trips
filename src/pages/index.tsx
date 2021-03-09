import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

function Home() {
  return (
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
  )
}

export default Home
