import { Input } from "@/components/ui/input";
import { login, signup } from "./actions";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiMicrosoft } from "react-icons/si";

export default function LoginPage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-auth-pattern">
      <form className=" p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white z-50">
        <div className="w-full flex justify-center">
          <h1 className="text-lg">Authenticate</h1>
        </div>
        <div className="my-4">
          <Input
            id="email"
            name="email"
            type="email"
            className="w-full md:w-[300px] pl-5 rounded-full bg-slate-100 focus-visible:ring-slate-200"
            placeholder="Email"
          />
        </div>
        <div className="my-4">
          <Input
            id="password"
            name="password"
            type="password"
            className="w-full md:w-[300px] pl-5 rounded-full bg-slate-100 focus-visible:ring-slate-200"
            placeholder="Password"
          />
        </div>
        <div className="flex my-6 justify-between">
          <Button formAction={login} className="w-full md:w-auto">
            Log in
          </Button>
          <Button
            formAction={signup}
            className="w-full md:w-auto"
            variant="link"
          >
            Create account
          </Button>
        </div>
        <Separator />
        <div className="flex my-6 justify-center gap-x-4">
          <Button variant="ghost">
            <FcGoogle className="h-6 w-6" />
          </Button>
          <Button variant="ghost">
            <FaApple className="h-6 w-6" />
          </Button>
          <Button variant="ghost">
            <SiMicrosoft className="h-6 w-6" />
          </Button>
        </div>
      </form>
    </div>
  );
}
