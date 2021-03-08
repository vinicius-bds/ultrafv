import { sign } from "jsonwebtoken"

export function setTokens(user) {
    const accessUser = {
        id: user.id
    }

    const accessToken = sign(
        { user: accessUser },
        "secret_key",
        { expiresIn: 60 * 15 * 1000 },
    )

    const refreshUser = {
        id: user.id,
        count: user.tokenCount,
    }

    const refreshToken = sign(
        { user: refreshUser },
        "refresh_token_secret_key",
        { expiresIn: 60 * 60 * 24 * 7 * 1000 },
    )

    return { accessToken, refreshToken }
}