import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SelectResumeTemplate } from "@/Slices/ResumeSlice";
import toast from "react-hot-toast";



const resumeTemplates = [
  {
    title: "Contemporary",
    image: "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/dugkptcrlaweo0n1urda",
    
    code: "101",
  },
  {
    title: "Current",
    image: "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/ctb4amkoauqibexb2dka",
    code: "102",
  },
  {
    title: "Innovative",
    image: "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/asa1zghma67j3dd1tanv",
    code: "103",
  },
  {
    title: "Basic",
    image: "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/wrkmaio2ty1rhknxokwi",
    code: "104",
  },
  {
    title: "Polished",
    image: "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/xksus56hwkuxbtvbzd8g",
    code: "105",
  },
  {
    title: "Polished",
    image: " https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/qhzrfdadelagrerlzipx",
    code: "106",
  },
  {
    title: "Polished",
    image: "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/qvfqfxgttsyiw9qw7a6p",
    code: "107",
  },
  {
    title: "Polished",
    
    image:  "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/qbuofez5medashgpvdsa",
    code: "108",
  },
  {
    title: "Polished",
    image:"https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/s3k6okl2tolpwmst69cp",
    code: "109",
  },
  {
    title: "Polished",
    image: "https://res.cloudinary.com/sanjay100/image/upload/f_auto,q_auto/v1/Resume%20Templates/ub1ul5pkgwsbts0yjolz",
    code: "110",
  },
];

const ResumeTemplatesGrid = () => {
  const { handleSubmit, setError, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [SelectedTemplateNumber, setSelectedTemplateNumber] = useState(null)

  const submitTemplate = async (data) => {
    console.log(SelectedTemplateNumber)
    if (!SelectedTemplateNumber) {
      console.log("not")
      setError("templateNumber", { message: "Please select at least one template to continue." });
      return;
    }
    await dispatch(SelectResumeTemplate(SelectedTemplateNumber)).unwrap();
    toast.success("Template selected.");
    navigate("/create/personal-details");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Choose Your Resume Template</h2>
      {errors.templateNumber && <div className="text-red-600 text-center">{errors.templateNumber.message}</div>}
      <form onSubmit={(e) => {
        e.preventDefault();
        submitTemplate({ templateNumber: SelectedTemplateNumber });
      }}>
        <div className="grid grid-cols-1 min-2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {resumeTemplates.map((template, index) => (
            <Card key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={template.image} alt={template.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <Button type="button" className="bg-white text-black font-semibold" onClick={() => {
                  setSelectedTemplateNumber(template.code)
                  submitTemplate()}}>
                  Use This Template
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ResumeTemplatesGrid;
