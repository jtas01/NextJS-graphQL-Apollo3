import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'https://api.todos.com/',
    cache
})