import { Resolver, Query } from 'type-graphql'
import { User } from './User'

@Resolver(User)
export class UserResolver {
    @Query(() => [User])
    async users() {}
}
