import Link from "next/link";
import LoginForm from "../_components/LoginForm";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">

        <Card className="text-center border max-w-120 min-w-90 p-5">
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>

          {/* Form Component */}
          <LoginForm />

          <CardDescription>
            <span>Do not have any account?</span>
            <Link href="/register" className="underline">register</Link>
            <p><Link href="/posts" className="underline">click here see all public posts</Link></p>
          </CardDescription>
        </Card>

      </div>
    </div>
  )
}

export default LoginPage;