import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ApolloProvider } from "react-apollo"
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks"
import client from "@/graphql/client"
import App from "./app.jsx"
import { StoreProvider } from "@/state/store"
import "normalize.css"
import "./app.css"

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloProviderHooks client={client}>
      <Router>
        <StoreProvider>
          <App />
        </StoreProvider>
      </Router>
    </ApolloProviderHooks>
  </ApolloProvider>,
  document.getElementById("app")
)
