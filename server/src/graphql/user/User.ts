import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class User {
    @Field()
    id: String

    @Field()
    username: String

    @Field()
    email: String

    @Field()
    password: String
}
