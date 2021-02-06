import { gql } from 'graphql-request'

import graphCmsClient from '~/lib/graphCmsClient'

import { ArtistsQueryResponse } from './types'

const ALL_ARTISTS = gql`
  query {
    artists {
      id
      name
      slug
      thumb {
        url
      }
    }
  }
`

export const fetchArtists = async (): Promise<{ artists: Artist[] }> => {
  return await graphCmsClient.request<ArtistsQueryResponse>(ALL_ARTISTS)
}
