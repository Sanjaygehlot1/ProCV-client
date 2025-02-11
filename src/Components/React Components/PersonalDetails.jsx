import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch, useSelector } from 'react-redux';
import { SavePersonalDetails } from '@/Slices/ResumeSlice';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
function PersonalDetails() {
    const { register, handleSubmit, formState: { errors } ,setValue} = useForm();
    const loadingState = useSelector((state) => state.Resume.loading)
    const error = useSelector((state) => state.Resume.error)
    const resumeDetails = useSelector((state) => state.Resume.resume)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(resumeDetails)

    const submit = async (data) => {
        try {
            if (data) {
                console.log(resumeDetails)
                await dispatch(SavePersonalDetails({resumeId : resumeDetails._id, data:data})).unwrap()
                toast.success("Details saved successfully")
                navigate("/create/education")
            }
        } catch (err) {
            toast.error(error)
            console.log(err)
        }

    };


    useEffect(()=>{
        setValue("firstName", resumeDetails.firstName)
        setValue("lastName", resumeDetails.lastName)
        setValue("email", resumeDetails.email)
        setValue("pinCode", resumeDetails.address.pinCode)
        setValue("city", resumeDetails.address.city)
        setValue("country", resumeDetails.address.country)
        setValue("phoneNumber", resumeDetails.phoneNumber)

    },[resumeDetails])


    

    return (
        <main className="flex-1 p-10 grid grid-cols-2 gap-10">
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <h1 className="text-2xl font-bold">What's the best way for employers to contact you?</h1>
                    <p className="text-gray-500">We suggest including an email and phone number.</p>
                    <p className="text-gray-500">Fields marked with * are required.</p>

                    <div className="mt-6 grid grid-cols-2 gap-4 max-w-3xl">
                        {[{
                            label: "First Name *",
                            name: "firstName",
                            required: "First name is required.",
                            type: "text"
                        }, {
                            label: "Last Name",
                            name: "lastName",
                            type: "text"
                        }, {
                            label: "City *",
                            name: "city",
                            required: "City is required.",
                            type: "text"
                        }, {
                            label: "Country *",
                            name: "country",
                            required: "Country is required.",
                            type: "text"
                        }, {
                            label: "Phone",
                            name: "phone",
                            type: "text"
                        }, {
                            label: "Email *",
                            name: "email",
                            required: "Email is required.",
                            type: "email"
                        },
                        {
                            label: "Pin Code *",
                            name: "pinCode",
                            required: "pin code is required.",
                            type: "text"
                        }].map(({ label, name, required, type }, index) => (
                            <div key={index}>
                                <Label>{label}</Label>
                                <Input
                                    type={type}
                                    placeholder={label.split("*")[0]}
                                    {...register(name, { required })}
                                />
                                {errors[name] && <div className="text-red-600">{errors[name]?.message}</div>}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-between max-w-3xl">
                        <Button variant="outline">Preview</Button>
                        {loadingState ? (<Button disabled  className="bg-red-500 hover:bg-red-600">
                            <Loader2 className="animate-spin" />
                            Please wait
                        </Button>) : (<Button type="submit" className="bg-red-500 hover:bg-red-600">Next: Education</Button>)}
                    </div>
                </div>
            </form>

            <Card>
                <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">Live Preview</h2>

                </CardContent>
            </Card>
        </main>
    );
}

export default PersonalDetails;
