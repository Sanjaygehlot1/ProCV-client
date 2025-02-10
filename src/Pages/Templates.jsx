import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resumeTemplates = [
  {
    title: "Contemporary",
    description: "This template highlights experience, education, and skills for management or business roles needing a polished format.",
    image: "/images/resume1.png",
  },
  {
    title: "Current",
    description: "Bold headings and clean lines make this template perfect for fast-paced industries like tech or product management.",
    image: "/images/resume2.png",
  },
  {
    title: "Innovative",
    description: "With a unique design, this template is ideal for artists or creatives wanting a visually engaging resume.",
    image: "/images/resume3.png",
  },
  {
    title: "Basic",
    description: "This template showcases leadership, certifications, and skills, fitting senior professionals highlighting career achievements.",
    image: "/images/resume4.png",
  },
  {
    title: "Polished",
    description: "A straightforward design for entry-level roles in fast-paced industries where clarity and simplicity are key.",
    image: "/images/resume5.png",
  },
];

const ResumeTemplatesGrid = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Choose Your Resume Template</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Button variant="outline">All</Button>
        <Button variant="outline">Creative</Button>
        <Button variant="outline">Simple</Button>
        <Button variant="outline">Modern</Button>
        <Button variant="outline">ATS Friendly</Button>
      </div>
      <div className="grid grid-cols-1 min-2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {resumeTemplates.map((template, index) => (
          <Card key={index} className="shadow-lg rounded-lg overflow-hidden flex flex-col">
            <img src={template.image} alt={template.title} className="w-full h-40 object-cover" />
            <CardContent className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{template.title}</h3>
              <p className="text-sm text-gray-600 mt-2 flex-grow">{template.description}</p>
              <Button className="mt-4 w-full">Use This Template</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplatesGrid;
