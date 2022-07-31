import { ReactNode } from 'react'

import { ApolloProvider as OriginalProvider } from '@apollo/client'

import { apolloClient } from '~/lib/apollo'

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  return <OriginalProvider client={apolloClient}>{children}</OriginalProvider>
}
