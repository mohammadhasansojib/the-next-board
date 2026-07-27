'use server'

import jwt from "jsonwebtoken"

export const getAccessToken = async (email: string) => {
    const accessToken = jwt.sign(
        {email},
        process.env.ACCESS_TOKEN_SECRET as string,
        {expiresIn: "1d"},
    );

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(accessToken)
        }, 1500);
    })
}

export const getRefreshToken = async (email: string) => {
    const refreshToken = jwt.sign(
        {email},
        process.env.REFRESH_TOKEN_SECRET as string,
        {expiresIn: "7d"},
    );

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(refreshToken)
        }, 1500);
    })
}