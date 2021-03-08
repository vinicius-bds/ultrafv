import { validateAccessToken, validateRefreshToken } from "../services/jwt/validateTokens"
import User from "../models/User"

export async function validateTokensMiddleware(req, res, next) {
    const accessToken = req.headers["x-access-token"]
    const refreshToken = req.headers["x-refresh-token"]

    if (!accessToken && !refreshToken) return next()

    const decodedAccessToken = validateAccessToken(accessToken)

    if (decodedAccessToken && decodedAccessToken.user) {
        req.user = decodedAccessToken.user
        return next()
    }

    const decodedRefreshToken = validateRefreshToken(RefreshToken)

    if (decodedRefreshToken && decodedRefreshToken.user) {
        const user = await User.findById(decodedRefreshToken.user.id)

        if (!user || user.tokenCount !== decodedRefreshToken.user.count) return next()

        req.user = decodedRefreshToken.user

        const userTokens = setTokens(user)
        
        res.set({
            "Access-Control-Expose-Headers": "x-access-token,x-refresh-token",
            "x-access-token": userTokens.accessToken,
            "x-refresh-token": userTokens.refreshToken
        })
      
        return next()
    }
    next()
}