import { useRouter } from 'next/dist/client/router'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import * as Styled from './styles'

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

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

function Map({ places = [] }: MapProps) {
  const router = useRouter()

  return (
    <Styled.MapWrapper>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
      >
        <CustomTileLayer />
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
    </Styled.MapWrapper>
  )
}

export default Map
