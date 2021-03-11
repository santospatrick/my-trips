import { Place } from 'graphql/generated/graphql'

export type PlaceTemplateProps = {
  place: Place
}

function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
      />

      {place.gallery.map((item) => (
        <img key={item.id} src={item.url} alt={place.name} />
      ))}
    </>
  )
}

export default PlaceTemplate
