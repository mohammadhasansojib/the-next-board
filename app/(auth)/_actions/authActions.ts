'use server'

import { getAccessToken, getRefreshToken } from "@/lib/auth/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const loginAction = async (prevState: {
    email: string,
    password: string,
}, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const payload = {
        email,
        password,
    }

    console.log(payload);

    // get jwt tokens
    const accessToken = await getAccessToken(email);
    const refreshToken = await getRefreshToken(email);

    // set cookies
    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessToken as string, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
    });
    cookieStore.set("refreshToken", refreshToken as string, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
    });
    
    // redirect("/")
    
    return payload;
}