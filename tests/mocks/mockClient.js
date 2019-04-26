import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { buildClientSchema, printSchema } from "graphql"
import * as introspectionResult from "./schema.json"
import { InMemoryCache } from "apollo-cache-inmemory"
import { SchemaLink } from "apollo-link-schema"
import { withClientState } from "apollo-link-state"
import casual from "casual"

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from "graphql-tools"

casual.seed(123)

const mocks = {
  Query: () => ({}),
  Mutation: () => ({})
}

const schemaObj = buildClientSchema(introspectionResult)
const typeDefs = printSchema(schemaObj)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolverMap
})

addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: true
})

const cache = new InMemoryCache(window.__APOLLO_STATE__)

// we need to add a default user to the store, because some mutations
// update the UserQuery, and without a user if the store initially, we
// get errors
const defaults = {}

const stateLink = withClientState({ defaults, cache })
const schemaLink = new SchemaLink({ schema })
const link = ApolloLink.from([stateLink, schemaLink])
const mockClient = new ApolloClient({
  cache,
  link
})

export default mockClient
