import User from "../../../models/User"
import { AuthenticationError } from "apollo-server-express"
import isEmpty from "lodash/isEmpty"

export default {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
        loggedInUser: async (_, _, { req }) => {
            if (isEmpty(req.user)) throw new AuthenticationError("Deve autenticar")
            const user = User.findById(req.user.id)
            return user
        }
    },
    Mutation: {
        createUser: (_, { data }) => User.create(data),
        deleteUser: async (_, { id }) => {
            const deleted = await User.findOneAndDelete(id)
            return !!deleted
        }
    },
}