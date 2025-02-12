import React, { useEffect, useRef } from 'react'
import { TemplateOne, TemplateTwo, TemplateThree } from '@/Components/ResumeTemplates/Templates'
import { useDispatch, useSelector } from 'react-redux'
import { GetResumeById } from '@/Slices/ResumeSlice'
import { Loader2 } from "lucide-react"
import { Button } from '@/Components/ui/button'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

function FinalPage() {
  const dispatch = useDispatch()
  const resumeData = useSelector((state) => state.Resume.resume)
  const pdfRef = useRef(null)

  useEffect(() => {
    const FetchResume = async () => {
      if (resumeData) {
        await dispatch(GetResumeById(resumeData._id)).unwrap()
      }
    }
    FetchResume()
  }, [dispatch, resumeData._id])

  const Templates = [
    {
      template: <TemplateOne data={resumeData} />,
      code: "101"
    },
    {
      template: <TemplateTwo data={resumeData} />,
      code: "102"
    },
    {
      template: <TemplateThree data={resumeData} />,
      code: "103"
    }
  ]

  if (Object.keys(resumeData).length === 0) {
    return (
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    )
  }

  const generatePDF = () => {
    if (!pdfRef.current) return

    html2canvas(pdfRef.current, { scale: 5 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgProps = pdf.getImageProperties(imgData)
      const imgWidth = pdfWidth
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      pdf.save('resume.pdf')
    })
  }

  return (
    <div className="w-full">
      {Templates.map((item, index) => {
        if (item.code === resumeData.template) {
          return (
            <div key={index} className="w-full min-h-screen" ref={pdfRef}>
              {item.template}
            </div>
          )
        }
        return null
      })}
      <div className="mt-4 flex justify-center">
        <Button onClick={generatePDF}>Download PDF</Button>
      </div>
    </div>
  )
}

export default FinalPage
