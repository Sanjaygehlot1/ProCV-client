import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Search, CopyPlusIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { SaveAboutDetails } from "@/Slices/ResumeSlice";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import Preview from "@/Utilities/preview";
import { useNavigate } from "react-router-dom";

function About() {

    const [searchTerm, setSearchTerm] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setloading] = useState(false);
    const [suggestedSummary, setsuggestedSummary] = useState([]);
    const resumeData = useSelector((state) => state.Resume.resume)
    const error = useSelector((state) => state.Resume.error)
    const loadingState = useSelector((state) => state.Resume.loading)
    const dispatch = useDispatch()
    const [isOpen, setisOpen] = useState(false)
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const navigate = useNavigate()

    const searchWithAI = async () => {
       if(searchTerm){
        setloading(true)
        try {
            
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = `give me 3 different descriptive summaries on ${searchTerm} for the summary section of my resume.  it should be of atleast 5 lines and give each in one paragraph, no line breaks within each summary start with text no title . `;
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const suggestedSummary = text.split("\n").map(summary => summary.trim()).filter(summary => summary);
            console.log(suggestedSummary)
            setsuggestedSummary(suggestedSummary);
        } catch (error) {

            console.error("Error fetching AI suggestions:", error);
        }
        setloading(false)
       }
    }

    const submit = async () => {
        try {
            if(summary !== ""){
                await dispatch(SaveAboutDetails({
                    resumeId : resumeData._id,
                    data : summary
                })).unwrap()
                toast.success("Summary saved successfully!")
                navigate("/create/finalize",{

                })
            }

        } catch (err) {
            toast.error(error)
            console.log(err)
        }
    }

    const CopySummary = async (data)=>{
        if(data !== ""){
            navigator.clipboard.writeText(data).then(()=>{
                toast.success("Copied!")
            })
        }
    }

    return (
        <div className="p-8 w-full bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold">Briefly tell us about your background</h1>
            <p className="text-gray-600 mb-4">Choose from our pre-written examples below or write your own.</p>

            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex items-center gap-2 border-b pb-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <Input
                        placeholder="Search by job title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 border-none focus:ring-0"
                    />
                </div>
                <div className="mt-3 flex justify-between flex-wrap gap-2 text-blue-600">
                    <div className="mt-3 flex flex-wrap gap-2 text-white">
                        {["Doctor", "Customer Service Representative", "Full Stack Developer", "Server", "Backend Developer"].map(
                            (job, index) => (
                                <span  onClick={(e) => setSearchTerm(e.target.innerText)} key={index} className="cursor-pointer  bg-gray-600  rounded-full px-2 py-1 hover:bg-gray-700">{job}</span>
                            )
                        )}
                    </div>
                    {loading ? (
                        <Button className="rounded-full" disabled >
                            Searching...
                        </Button>
                    ) :
                        (
                            <Button className="rounded-full" onClick={searchWithAI} >
                                Search
                            </Button>
                        )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Ready-to-use Suggestions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {suggestedSummary.length !== 0 ? (
                            suggestedSummary.map((text, index) => (
                                <div key={index} className="p-3 border rounded-md mb-2 flex  gap-2">
                                    <p className="text-sm">{text}</p>
                                    <CopyPlusIcon onClick={()=>{
                                        CopySummary(text)
                                    }}  className="cursor-pointer text-orange-500 hover:text-black" width="200px"/>
                                </div>
                            ))
                        ) : (
                            <div>
                                <h1 className="text-gray-400">Start by searching something...</h1>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Write your summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Textarea
                            placeholder="Write your summary here..."
                            value={summary || resumeData.about}
                            onChange={(e) => setSummary(e.target.value)}
                            className="h-32"
                        />
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-between mt-6">
            <Button className ="rounded-full" variant="" onClick={(e) => {
                                e.preventDefault()
                                setisOpen(true)
                            }}>Preview</Button>
                {loadingState ? (<Button disabled className="bg-red-500 rounded-full hover:bg-red-600">
                    <Loader2 className="animate-spin" />
                    Saving
                </Button>) : (<Button onClick= {submit} className="bg-red-500 rounded-full hover:bg-red-600">Next: Finalize</Button>)}
            </div>
            {isOpen && (<Preview Open={isOpen} onClose={() => setisOpen(false)} />)}
        </div>
    );
}

export default About