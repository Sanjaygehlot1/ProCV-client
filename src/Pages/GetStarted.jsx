import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Wand} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {

  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-4"
        >
          Build a Standout Resume in Minutes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg max-w-2xl"
        >
          ProCV helps you craft the perfect resume effortlessly with AI-powered templates and professional designs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6"
        >
          <Button onClick={()=>navigate("/templates")} size="lg" className="bg-white rounded-xl text-blue-600 hover:bg-blue-100 shadow-lg">
            Get Started for Free
          </Button>
        </motion.div>
        <div className="absolute bottom-0 w-full">
          <img src="/logo.svg" alt="ProCV Preview" className="w-full object-cover" />
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose ProCV?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard icon={<Wand />} title="AI-Powered Templates" description="Generate optimized resumes with AI-driven designs." />
          <FeatureCard icon={<CheckCircle />} title="ATS-Friendly Formatting" description="Ensure your resume gets past applicant tracking systems." />
          <FeatureCard icon={<FileText />} title="One-Click PDF Export" description="Download your resume instantly in professional formats." />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
        <p className="text-lg mb-6">Join thousands of professionals using ProCV to create stunning resumes in minutes.</p>
        <Button onClick={()=>navigate("/templates")} size="lg" className="bg-blue-500 rounded-xl hover:bg-blue-600 shadow-lg">
          Start Building Your Resume
        </Button>
      </section>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <Card className="p-6 bg-white shadow-xl">
    <CardContent className="flex flex-col items-center">
      <div className="text-blue-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);
