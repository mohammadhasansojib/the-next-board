'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginAction } from "../_actions/authActions";
import { useActionState } from "react";

const LoginForm = () => {
    const [state, action, pending] = useActionState(loginAction, {
        email: "",
        password: "",
    });

    return (
        <form action={action} className="flex flex-col gap-3">
            <Input name="email" type="email" placeholder="enter your email" />
            <Input name="password" type="password" placeholder="enter your password" />

            <Button disabled={pending} className={`cursor-pointer self-center`} type="submit" size="xlg">
                {
                    pending ? "Login..." : "Login"
                }
            </Button>
        </form>
    )
}

export default LoginForm;