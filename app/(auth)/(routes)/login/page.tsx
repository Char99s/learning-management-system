import { Input } from "@/components/ui/input";
import { login, signup } from "./actions";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-auth-pattern">
      <form className=" p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white z-50">
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
        <Separator />
        <div className="flex my-4">
          <Button
            formAction={login}
            size="sm"
            className="w-full md:w-auto mr-4"
          >
            Log in
          </Button>
          <Button
            formAction={signup}
            size="sm"
            className="w-full md:w-auto mr-4"
            variant="ghost"
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}
