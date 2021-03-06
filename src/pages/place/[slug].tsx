import { graphQLClient } from 'graphql/client'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PlaceTemplate, { PlaceTemplateProps } from 'templates/Places'

function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlaceTemplate place={place} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await graphQLClient.request<GetPlacesQuery>(GET_PLACES, {
    first: 3,
  })
  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await graphQLClient.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`,
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      place,
    },
  }
}

export default Place
