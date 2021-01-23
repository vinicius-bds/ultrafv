import 'reflect-metadata'
import './utils/connection'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './graphql/user/UserResolver'

const bootstrap = async () => {
    const schema = await buildSchema({
        resolvers: [UserResolver]
    })

    const server = new ApolloServer({ schema })

    server.listen(4100, () => console.log('Servidor ligado em http://localhost:4100/'))
}

bootstrap()
