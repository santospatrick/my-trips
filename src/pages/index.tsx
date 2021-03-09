import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

function Home() {
  return <Map />
}

export default Home
