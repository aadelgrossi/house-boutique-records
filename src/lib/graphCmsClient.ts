import { GraphQLClient } from 'graphql-request'

export default new GraphQLClient(
  `https://api-ca-central-1.graphcms.com/v2/${process.env.GRAPH_CMS_ID}/master`,
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_AUTH_TOKEN}`
    }
  }
)
