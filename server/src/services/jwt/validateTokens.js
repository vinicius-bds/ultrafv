import { verify } from "jsonwebtoken"

export function validateAccessToken(token) {
    try {
        return verify(token, "secret_key")
    } catch {
        return null
    }
}

export function validateRefreshToken(token) {
    try {
        return verify(token, "refresh_token_secret_key")
    } catch {
        return null
    }
}