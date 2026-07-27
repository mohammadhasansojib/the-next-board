'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegisterForm = () => {

    return (
        <form action="" className="flex flex-col gap-3">
            <Input name="username" type="text" placeholder="enter your username" />
            <Input name="email" type="email" placeholder="enter your email" />
            <Input name="password" type="password" placeholder="enter your password" />

            <Button className={`cursor-pointer self-center`} type="submit" size="xlg">Register</Button>
        </form>
    )
}

export default RegisterForm;