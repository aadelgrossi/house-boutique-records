import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  ssrMode: true,
  uri: 'https://api-ca-central-1.graphcms.com/v2/ckkncuqsi8d6g01xo82qcgqiw/master',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPH_CMS_AUTH_TOKEN}`
  }
})
