import React, { useEffect, useRef } from 'react';
import {
  TemplateOne,
  TemplateTwo,
  TemplateThree,
  TemplateFour,
  TemplateFive,
  TemplateSix,
  TemplateSeven,
  TemplateEight,
  TemplateNine,
  TemplateTen,
} from '@/Components/ResumeTemplates/Templates';
import { useDispatch, useSelector } from 'react-redux';
import { GetResumeById } from '@/Slices/ResumeSlice';
import { Loader2, DownloadIcon } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';
import { FileEditIcon } from 'lucide-react';
import toast from 'react-hot-toast';

function FinalPage() {
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.Resume.resume);
  const pdfRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResume = async () => {
      if (resumeData && resumeData._id) {
        await dispatch(GetResumeById(resumeData._id)).unwrap();
      }
    };
    fetchResume();
  }, [dispatch, resumeData?._id]);

  const Templates = [
    { template: <TemplateOne data={resumeData} />, code: '101' },
    { template: <TemplateTwo data={resumeData} />, code: '102' },
    { template: <TemplateThree data={resumeData} />, code: '103' },
    { template: <TemplateFour data={resumeData} />, code: '104' },
    { template: <TemplateFive data={resumeData} />, code: '105' },
    { template: <TemplateSix data={resumeData} />, code: '106' },
    { template: <TemplateSeven data={resumeData} />, code: '107' },
    { template: <TemplateEight data={resumeData} />, code: '108' },
    { template: <TemplateNine data={resumeData} />, code: '109' },
    { template: <TemplateTen data={resumeData} />, code: '110' },
  ];

  if (!resumeData || Object.keys(resumeData).length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Button disabled className="flex items-center gap-2">
          <Loader2 className="animate-spin" />
          Please wait...
        </Button>
      </div>
    );
  }

  const generatePDF = () => {
    if (!pdfRef.current) return;
   toast.promise(async()=>{
    html2canvas(pdfRef.current, { scale: 5 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
   },
  {
    loading: "Preparing to download...",
    success:'Resume downloaded!'
  })
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-4/5 min-h-screen p-4" ref={pdfRef}>
        {Templates.map((item, index) => {
          if (item.code === resumeData.template) {
            return <div key={index}>{item.template}</div>;
          }
          return null;
        })}
      </div>

      <div className="w-full md:w-1/5 flex flex-col items-center justify-start p-4 gap-4">
        <Button
          onClick={generatePDF}
          className="w-full flex items-center justify-center"
        >
          <DownloadIcon className="mr-2" />
          Download PDF
        </Button>
        <Button onClick={() => navigate('/templates')} className="w-full">
          {<FileEditIcon/>}Change Template
        </Button>
      </div>
    </div>
  );
}

export default FinalPage;
