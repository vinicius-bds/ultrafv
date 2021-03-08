import User from "../../../models/User"
import bcryptjs from "bcryptjs"
import { setTokens } from "../../../services/jwt/setTokens"

export default {
    Mutation: {
        authenticate: async (_, { email, password }) => {
            const user = await User.findOne({ email })
            if (!user) return null

            const passwordIsValid = await bcryptjs.compare(password, user.password)

            if (!passwordIsValid) return null

            return setTokens(user)
        }
    }
}