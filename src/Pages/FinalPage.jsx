import React, { useEffect, useState } from 'react'
import { TemplateFourteen } from '@/Components/ResumeTemplates/Templates'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetResumeById } from '@/Slices/ResumeSlice'
import { Loader2 } from "lucide-react"
import { Button } from '@/Components/ui/button'
function FinalPage() {

    const ResumeData = useSelector((state)=>state.Resume.resume)
    const dispatch = useDispatch()
    const {resumeId} = useParams()
    useEffect(()=>{
        const FetchResume = async ()=>{
            if(resumeId){
                console.log(resumeId)
              const data =  await dispatch(GetResumeById(resumeId)).unwrap()
              console.log(data)
            }
        }
        FetchResume()
    },[resumeId])
    
if(Object.keys(ResumeData).length === 0){
    return (
        <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    )
}

  return (
    <div>
      <TemplateFourteen data={ResumeData}/>
    </div>
  )
}

export default FinalPage
