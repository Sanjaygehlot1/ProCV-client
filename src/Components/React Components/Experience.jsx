import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { SaveExperienceDetails } from '@/Slices/ResumeSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

function Experience() {

    const loadingState = useSelector((state)=>state.Resume.loading)
    const error = useSelector((state)=>state.Resume.error)
    const resumeData = useSelector((state)=>state.Resume.resume)
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors},setValue,setError} = useForm()
    const dispatch = useDispatch()

    const submit = async (data)=>{
        try {
            if(data){
                await dispatch(SaveExperienceDetails({resumeId : resumeData._id, data})).unwrap()
                toast.success("Details saved successfully")
                navigate("/skills")
            }
        } catch (err) {
            toast.error(error)

            console.log(err)
        }
    }

    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Tell us about your most recent job</h2>
            <p className="text-gray-600 mb-6">We'll start there and work backward.</p>

            <form onSubmit={handleSubmit(submit)} className="space-y-5">
                <div className="space-y-1">
                    <label className="text-sm font-medium">Job Title *</label>
                    <Input placeholder="e.g. Retail Sales Associate"
                    {...register("title",{
                        required: "Job title is required."
                    })} />
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium">Company Name</label>
                    <Input placeholder="e.g. H&M" 
                    {...register("companyName")}/>
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium">Location</label>
                    <Input placeholder="e.g. New Delhi, India"
                    {...register("location")} />
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="remote" onChange={(value)=>setValue("remote",value)}/>
                    <label htmlFor="remote" className="text-sm">Remote</label>
                </div>

                <div className='flex gap-8'>
                    <div className="flex space-x-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium">Start Date</label>
                            <Select onValueChange={(value)=>setValue("startMonth",value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                                        <SelectItem key={index} value={month}>{month}</SelectItem>

                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium">Year</label>
                            <Select onValueChange={(value)=>setValue("startYear",value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 50 }, (_, i) => (
                                        <SelectItem key={i} value={`${2025 - i}`}>{2025 - i}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium">End Date</label>
                            <Select onValueChange={(value)=>setValue("endMonth",value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                                        <SelectItem key={index} value={month}>{month}</SelectItem>

                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium">Year</label>
                            <Select onValueChange={(value)=>setValue("endYear",value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 50 }, (_, i) => (
                                        <SelectItem key={i} value={`${2025 - i}`}>{2025 - i}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="currently-working" onChange={(value)=>setValue("currentlyWorking",value)} />
                    <label htmlFor="currently-working" className="text-sm">I currently work here</label>
                </div>

                <div className="flex justify-between mt-6">
                    <Button variant="outline">Preview</Button>
                    {loadingState ? (<Button disabled className="bg-red-500 hover:bg-red-600">
                        <Loader2 className="animate-spin" />
                        Please wait
                    </Button>) : (<Button type="submit" className="bg-red-500 hover:bg-red-600">Next: Professional Experience</Button>)}
                </div>
            </form>
        </div>
    )
}

export default Experience

