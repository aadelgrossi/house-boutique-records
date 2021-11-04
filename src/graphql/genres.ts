import { gql } from 'graphql-request'

import graphCmsClient from '~/lib/graphCmsClient'

import { AllGenresQueryResponse } from './types'

const ALL_GENRES = gql`
  query allGenres {
    genres {
      id
      name
    }
  }
`

export const fetchAllGenres = async (): Promise<AllGenresQueryResponse> => {
  return await graphCmsClient.request<AllGenresQueryResponse>(ALL_GENRES)
}
