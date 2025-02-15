import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import { SaveProjectDetails } from "@/Slices/ResumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AddProjects = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const resumeData = useSelector((state)=>state.Resume.resume)
    const error = useSelector((state)=>state.Resume.error)
  const [projects, setProjects] = useState([
    { title: "", description: "", link: "" }
  ]);

  const handleChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, { title: "", description: "", link: "" }]);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const OnSave = async ()=>{
    try {
        if(projects.length !== 0){
            console.log(projects)
            await dispatch(SaveProjectDetails({
                resumeId : resumeData._id,
                data : projects
               })).unwrap() 
               toast.success("Projects saved successfully!")
               navigate("/create/summary")
        }
       
    } catch (err) {
        toast.error(error)
        console.log(err)
    }
  }

  return (
   <div className="w-full flex justify-center">
     <div className="w-2/4 my-4 mx-4 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Add Projects</h2>
      {projects.map((project, index) => (
        <Card key={index} className="p-4 relative">
          <CardHeader className="font-semibold text-gray-700">Project {index + 1}</CardHeader>
          <CardContent className="space-y-2">
            <Input
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
            <Input
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
            />
            <Input
              placeholder="Project Link"
              value={project.link}
              onChange={(e) => handleChange(index, "link", e.target.value)}
            />
            {projects.length > 1 && (
              <Button
                variant="destructive"
                className="absolute rounded-full top-2 right-2"
                onClick={() => removeProject(index)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
      <div className="flex gap-2">
        <Button onClick={addProject} variant="secondary" className="flex rounded-full items-center">
          <Plus className="w-4 h-4 mr-1" /> Add Project
        </Button>
        <Button className="rounded-full" onClick={OnSave}>Save Projects</Button>
      </div>
    </div>
    
   </div>
  );
};

export default AddProjects;
