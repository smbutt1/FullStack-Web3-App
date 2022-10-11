import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
uri: "YOUR_GRAPHQL_URL_HERE",
cache: new InMemoryCache(),
});

export default client;
