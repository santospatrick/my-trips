import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import { graphQLClient } from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await graphQLClient.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 60,
    props: {
      places,
    },
  }
}

export default Home
