import { ApolloServer } from "apollo-server"
import express from "express"
import { validateTokensMiddleware } from "./middlewares/validateTokens"
import "./utils/connection"

export const startServer = ({ typeDefs, resolvers }) => {
    const apollo = new ApolloServer({ 
        typeDefs, resolvers,
        context: ({ req, res }) => ({ req, res })
    })

    const app = express()

    app.use(validateTokensMiddleware)

    apollo.applyMiddleware({ app })

    app.listen(3333, () => console.log("* Servidor ligado em http://localhost:3333"))
}
