import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { LoginUser } from "@/Slices/AuthSlice"
export function LoginForm() {

    

    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const loadingState = useSelector((state) => state.Auth.loading)
    const error = useSelector((state) => state.Auth.error)
    const navigate = useNavigate()
    const handlelogin = async (data) => {
        try {
            console.log(data)
            await dispatch(LoginUser(data)).unwrap()
            navigate("/templates")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>
                        Login to your account here
                    </CardDescription>
                    {error && <div className="text-red-600">{error}</div>}
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(handlelogin)}>
                        <div className="grid gap-6">

                            <div className="grid gap-6">
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
                                    {errors.email  && <div className="text-red-600">{errors.email.message
                                            }</div>}
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <a
                                            href="#"
                                            className="ml-auto text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input id="password" placeholder="********" type="password" required
                                        {...register("password", {
                                            required: "password is required"
                                        })} />
                                        {errors.password  && <div className="text-red-600">{errors.password.message
                                            }</div>}
                                </div>
                                {loadingState ? (<Button disabled>
                                    <Loader2 className="animate-spin" />
                                    Please wait
                                </Button>) : (<Button type="submit" className="w-full">
                                    Login
                                </Button>)}
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link to={'/register'} className="underline underline-offset-4" >
                                    Signup
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
