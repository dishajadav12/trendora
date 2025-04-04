import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Sign In',
};


const SignIn = () => {
    return (
      <div className=" max-w-md mx-auto">
        <Card className="text-center">
          <CardHeader>
            <Link href={"/"} className="flex justify-center">
              <Image
                src={"/images/trendora_logo.svg"}
                alt={`${APP_NAME} logo`}
                width={100}
                height={100}
                priority={true}
              ></Image>
            </Link>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Sign in to your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">{/* Sign in FORM */}</CardContent>
        </Card>
      </div>
    );
}
 
export default SignIn;