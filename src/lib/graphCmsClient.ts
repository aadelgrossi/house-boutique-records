import { GraphQLClient } from 'graphql-request'

export default new GraphQLClient(
  `https://api-ca-central-1.graphcms.com/v2/${process.env.NEXT_PUBLIC_GRAPH_CMS_ID}/master`,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPH_CMS_AUTH_TOKEN}`
    }
  }
)
