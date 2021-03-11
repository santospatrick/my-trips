import { useRouter } from 'next/dist/client/router'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

function Map({ places = [] }: MapProps) {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Marker
          key={`place-${place.id}`}
          position={[place.location.latitude, place.location.longitude]}
          title={place.name}
          eventHandlers={{
            click: () => {
              router.push(`/place/${place.slug}`)
            },
          }}
        />
      ))}
    </MapContainer>
  )
}

export default Map
