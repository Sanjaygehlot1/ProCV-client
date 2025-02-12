import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, RegisterUser } from "@/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";


export function Register() {

  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm()
  const error = useSelector((state) => state.Auth.error)
  const loadingState = useSelector((state) => state.Auth.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = async (data) => {
    if (data) {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          message: "password do not match",
          type: "manual"
        })
        return
      }
      console.log
      const response = await dispatch(RegisterUser(data)).unwrap()
      console.log(response)
      await dispatch(LoginUser({ email: data.email, password: data.password })).unwrap()
      navigate("/templates")
    }
  }

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create an Account</CardTitle>
          <CardDescription>
            Sign up to get started!
          </CardDescription>
          {error && <div className="text-red-600">{error}</div>}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="example"
                  required
                  {...register("fullName", {
                    required: "Full Name is required"
                  })}
                />
                {errors.fullName && <div className="text-red-600">{errors.fullName.message
                }</div>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email", {
                    required: "email is required"
                  })}
                />
                {errors.email && <div className="text-red-600">{errors.email.message
                }</div>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  {...register("password", {
                    required: "password is required"
                  })}
                />
                {errors.password && <div className="text-red-600">{errors.password.message
                }</div>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  required
                  {...register("confirmPassword", {
                    required: "re-enter your password here"
                  })}
                />
                {errors.confirmPassword && <div className="text-red-600">{errors.confirmPassword.message
                }</div>}
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
        By clicking Sign Up, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
}
