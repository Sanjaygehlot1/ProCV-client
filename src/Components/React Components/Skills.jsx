import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSelector,useDispatch } from "react-redux";
import { SaveSkillsDetails } from "@/Slices/ResumeSlice";
import toast from "react-hot-toast";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function SkillsSection() {

  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [aiSkills, setAiSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingState = useSelector((state)=>state.Resume.loading)
  const error = useSelector((state)=>state.Resume.error)
  const resumeData = useSelector((state)=>state.Resume.resume)
    const dispatch = useDispatch()
  const addSkill = () => {
    if (inputSkill.trim() !== "") {
      setSkills([...skills, inputSkill.trim()]);
      setInputSkill("");
    }
  };

  const askAI = async () => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `professional and technical skills related to ${resumeData.previousJob.title} and similar background add 2 communication skills to but all in short ans precise way. maximum 8 ` ;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const suggestedSkills = text.split("\n").map(skill => skill.trim()).filter(skill => skill);
      console.log(suggestedSkills)
      setAiSkills(suggestedSkills);
    } catch (error) {
      console.error("Error fetching AI skills:", error);
    }
    setLoading(false);
  };

  const submit = async ()=>{
    try {
        await dispatch(SaveSkillsDetails({resumeId: resumeData._id, data: skills})).unwrap()
        toast.success("Details saved successfully")

    } catch (err) {
        console.log(err)
        toast.error(error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold">What skills would you like to highlight?</h2>
      <p className="text-gray-600 mb-4">Choose from AI recommendations or enter your own.</p>
      
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-2" onClick={askAI} disabled={loading}>
              {loading ? "Fetching..." : "Ask AI for Skills"}
            </Button>
            <ul className="list-disc list-inside text-gray-700">
              {aiSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Your Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Type a skill..."
                value={inputSkill}
                onChange={(e) => setInputSkill(e.target.value)}
              />
              <Button onClick={addSkill}>Add</Button>
            </div>
            <Separator className="my-4" />
            <ul className="list-disc list-inside text-gray-700">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline">Preview</Button>
        <Button onClick={submit} className="bg-red-500 text-white">Next: Summary</Button>
      </div>
    </div>
  );
}
