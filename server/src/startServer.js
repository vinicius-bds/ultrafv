import { ApolloServer } from "apollo-server"

export const startServer = ({ typeDefs, resolvers }) => {
    const server = new ApolloServer({ typeDefs, resolvers })
    server.listen(3333, () => console.log("* Servidor ligado em http://localhost:3333"))
}