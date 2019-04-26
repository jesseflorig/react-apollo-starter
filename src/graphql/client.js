import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"
import { InMemoryCache } from "apollo-cache-inmemory"
import config from "@config"
import fetch from "unfetch"

const cache = new InMemoryCache()

// GraphQL Endpoint
const httpLink = new HttpLink({
  uri: config.graphql.endpoint,
  fetch
})

// Error Reporting
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link,
  cache,
  fetchOptions: {
    mode: "no-cors"
  }
})

export default client
