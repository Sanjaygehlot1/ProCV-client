import React from "react";

const ResumePage = ({ children }) => (
  <div
    style={{
      width: "8.5in",
      height: "11in",
      margin: "0.5in auto",
      fontSize: "12pt",
      fontFamily: "'Roboto', sans-serif",
    }}
    className="bg-white shadow-xl overflow-hidden p-4"
  >
    {children}
  </div>
);

export const TemplateOne = ({ data }) => (
  <ResumePage>
    <header className="text-center mb-8">
      <h1 className="text-5xl font-bold text-blue-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        {data.firstName} {data.lastName}
      </h1>
      <div className="flex justify-center space-x-4 text-gray-600">
        <p>📧 {data.email}</p>
        <p>📱 {data.phoneNumber || 'N/A'}</p>
        <p>📍 {data.address.city}, {data.address.country}</p>
      </div>
      <div className="h-1 bg-blue-200 w-24 mx-auto mt-4 rounded-full" />
    </header>

    <section className="grid grid-cols-3 gap-8">
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Skills</h2>
          <ul className="space-y-2">
            {data.skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">Education</h2>
          <div className="space-y-2">
            <p className="font-semibold">{data.college?.name}</p>
            <p>{data.college?.degree?.degreeName} in {data.college?.degree?.field}</p>
            <p className="text-sm text-gray-600">{data.college?.graduation?.month} {data.college?.graduation?.year}</p>
          </div>
        </div>

        {/* <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">Languages</h2>
          <ul className="text-gray-700">
            {data.languages.map((lang, index) => <li key={index}>{lang}</li>)}
          </ul>
        </div> */}
      </div>

      <div className="col-span-2 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.about}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Work Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">{data.previousJob?.title}</h3>
              <p className="text-blue-600">{data.previousJob?.companyName}</p>
              <p className="text-sm text-gray-500">{data.previousJob?.startDate?.startMonth} {data.previousJob?.startDate?.startYear} - {data.previousJob?.endDate?.endMonth} {data.previousJob?.endDate?.endYear}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Projects</h2>
          <ul className="space-y-3">
            {data.projects?.map((project, index) => (
              <li key={index}>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <a href={project.link} className="text-blue-600 text-sm" target="_blank" rel="noopener noreferrer">{project.link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </ResumePage>
);


export const TemplateTwo = ({ data }) => (
  <ResumePage>
    <div
      className="h-full bg-gradient-to-br from-purple-100 to-indigo-100 p-8"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <header className="flex items-center mb-8">
        <div className="w-32 h-32 bg-indigo-200 rounded-full mr-6 flex items-center justify-center">
          <span className="text-4xl">👤</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-indigo-900">
            {data.firstName} <span className="text-indigo-600">{data.lastName}</span>
          </h1>
          <p className="text-indigo-700">
            {data.previousJob.title} @ {data.previousJob.companyName}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">Contact</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                {data.email}
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                {data.address.city } - {data.address.pinCode}, {data.address.country}
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">Top Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">{data.about}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Career Timeline</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-200 pl-4">
                <h3 className="font-bold text-lg">{data.previousJob.title}</h3>
                <p className="text-indigo-600">{data.previousJob.companyName}</p>
                <p className="text-sm text-gray-500">
                  {data.previousJob?.startDate?.startMonth} {data.previousJob?.startDate?.startYear} -
                  {data.previousJob?.endDate?.endMonth} {data.previousJob?.endDate?.endYear}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Education</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">{data.college.name}</h3>
              <p className="text-indigo-600">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-sm text-gray-500">
                Graduated (or expected): {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ResumePage>
);

export const TemplateThree = ({ data }) => (
  <ResumePage>
    <div
      className="h-full p-12 space-y-8"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {data.firstName} {data.lastName}
        </h1>
        <div className="flex justify-center space-x-4 text-gray-500">
          <p>{data.email}</p>
          <p>•</p>
          <p>{data.address.city}, {data.address.country}</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1 space-y-8">
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Education
            </h2>
            <div>
              <p className="font-semibold">{data.college.name}</p>
              <p className="text-sm text-gray-600">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-xs text-gray-400">
                {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Skills
            </h2>
            <ul className="space-y-2">
              {data.skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 before:content-['–'] before:mr-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Profile
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl">{data.about}</p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{data.previousJob.title}</h3>
                    <p className="text-gray-600">{data.previousJob.companyName}</p>
                  </div>
                  <p className="text-sm text-gray-400">
                    {data.previousJob?.startDate?.startMonth} {data.previousJob?.startDate?.startYear} -
                    {data.previousJob?.endDate?.endMonth} {data.previousJob?.endDate?.endYear}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

// Template 4 - Bold and Modern
export const TemplateFour = ({ data }) => (
  <ResumePage>
    <div 
      className="h-full p-8"
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)"
      }}
    >
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          {data.firstName} <span className="text-blue-600">{data.lastName}</span>
        </h1>
        <div className="flex justify-center space-x-4 text-gray-600">
          <p>✉️ {data.email}</p>
          <p>•</p>
          <p>📍 {data.address.city}, {data.address.country}</p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.about}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 p-3 rounded-lg flex items-center"
                >
                  <span className="text-blue-600 mr-2">✔️</span>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg">{data.previousJob.title}</h3>
                <p className="text-blue-600">{data.previousJob.companyName}</p>
                <p className="text-sm text-gray-500">
                  {data.previousJob.startDate.startMonth} {data.previousJob.startDate.startYear} - 
                  {data.previousJob.endDate.endMonth} {data.previousJob.endDate.endYear}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
              Education
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">{data.college.name}</h3>
              <p className="text-blue-600">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-sm text-gray-500">
                Graduated (or expected): {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

// Template 5 - Creative and Colorful
export const TemplateFive = ({ data }) => (
  <ResumePage>
    <div 
      className="h-full p-8"
      style={{ 
        fontFamily: "'Montserrat', sans-serif",
        background: "radial-gradient(circle at top left, #f0f4ff, #ffffff)"
      }}
    >
      <div className="grid grid-cols-5 gap-8">
        {/* Left Sidebar */}
        <div className="col-span-2 bg-gradient-to-b from-blue-600 to-indigo-700 p-8 rounded-xl text-white">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {data.firstName} {data.lastName}
            </h1>
            <p className="text-sm opacity-80">{data.previousJob.title}</p>
          </header>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                {data.email}
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                {data.address.city}, {data.address.country}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Skills</h2>
            <ul className="space-y-2">
              {data.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Main Content */}
        <div className="col-span-3 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">{data.about}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg">{data.previousJob.title}</h3>
                <p className="text-indigo-600">{data.previousJob.companyName}</p>
                <p className="text-sm text-gray-500">
                  {data.previousJob.startDate.startMonth} {data.previousJob.startDate.startYear} - 
                  {data.previousJob.endDate.endMonth} {data.previousJob.endDate.endYear}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Education</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">{data.college.name}</h3>
              <p className="text-indigo-600">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-sm text-gray-500">
                Graduated (or expected): {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

// Template 6 - Modern and Minimal
export const TemplateSix = ({ data }) => (
  <ResumePage>
    <div 
      className="h-full p-12"
      style={{ 
        fontFamily: "'Inter', sans-serif",
        background: "#fafafa"
      }}
    >
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          {data.firstName} {data.lastName}
        </h1>
        <p className="text-gray-600">{data.previousJob.title}</p>
      </header>

      <div className="grid grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Contact
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-700">📧 {data.email}</li>
              <li className="text-gray-700">📍 {data.address.city}, {data.address.country}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Skills
            </h2>
            <ul className="space-y-2">
              {data.skills.map((skill, index) => (
                <li key={index} className="text-gray-700">
                  • {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{data.about}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">{data.previousJob.title}</h3>
                <p className="text-gray-600">{data.previousJob.companyName}</p>
                <p className="text-sm text-gray-400">
                  {data.previousJob.startDate.startMonth} {data.previousJob.startDate.startYear} - 
                  {data.previousJob.endDate.endMonth} {data.previousJob.endDate.endYear}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div>
              <h3 className="font-bold">{data.college.name}</h3>
              <p className="text-gray-600">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-sm text-gray-400">
                Graduated (or expected): {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

// Template 7 - Professional Timeline
export const TemplateSeven = ({ data }) => (
  <ResumePage>
    <div 
      className="h-full p-12 bg-white"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      <header className="mb-16 text-center">
        <div className="inline-block mb-6">
          <h1 className="text-5xl font-black text-gray-900 leading-tight">
            {data.firstName}
            <span className="text-blue-600">.</span>
            <br />
            {data.lastName}
          </h1>
          <div className="h-2 w-24 bg-blue-600 mx-auto mt-2" />
        </div>
        <div className="flex justify-center space-x-6 text-gray-600">
          <p className="flex items-center">
            <span className="mr-2">📧</span>
            {data.email}
          </p>
          <p className="flex items-center">
            <span className="mr-2">📍</span>
            {data.address.city}, {data.address.country}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-5 gap-12">
        {/* Left Column */}
        <div className="col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-4">Core Skills</h2>
            <ul className="space-y-3">
              {data.skills.map((skill, index) => (
                <li 
                  key={index}
                  className="flex items-center bg-blue-50 p-3 rounded-lg"
                >
                  <span className="text-blue-600 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-4">Education</h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">{data.college.name}</h3>
              <p className="text-blue-600 text-sm">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-3">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Professional Journey</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-blue-100">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-2" />
                <h3 className="text-lg font-bold">{data.previousJob.title}</h3>
                <p className="text-blue-600">{data.previousJob.companyName}</p>
                <p className="text-sm text-gray-500">
                  {data.previousJob.startDate.startMonth} {data.previousJob.startDate.startYear} - 
                  {data.previousJob.endDate.endMonth} {data.previousJob.endDate.endYear}
                </p>
                <div className="mt-4 text-gray-700">{data.about}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

// Template 8 - Modern Dashboard
export const TemplateEight = ({ data }) => (
  <ResumePage>
    <div 
      className="h-full grid grid-cols-4 bg-gray-50"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      {/* Sidebar */}
      <div className="col-span-1 bg-gray-900 text-white p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {data.firstName}
            <span className="text-blue-400">.</span>
          </h1>
          <p className="text-gray-400">{data.lastName}</p>
        </header>

        <section className="mb-8">
          <h2 className="text-sm font-bold text-blue-400 mb-4">CONTACT</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              {data.address.city}, {data.address.country}
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              {data.email}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-bold text-blue-400 mb-4">EXPERTISE</h2>
          <div className="space-y-3">
            {data.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-3 rounded-lg text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Main Content */}
      <div className="col-span-3 p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl">{data.about}</p>
        </section>

        <div className="grid grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">{data.previousJob.title}</h3>
              <p className="text-blue-600 text-sm">{data.previousJob.companyName}</p>
              <p className="text-gray-500 text-xs mt-2">
                {data.previousJob?.startDate?.startMonth} {data.previousJob?.startDate?.startYear} - 
                {data.previousJob?.endDate?.endMonth} {data.previousJob?.endDate?.endYear}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">{data.college.name}</h3>
              <p className="text-blue-600 text-sm">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

// Template 9 - Creative Portfolio
export const TemplateNine = ({ data }) => (
  <ResumePage>
    <div 
      className="h-full p-12 bg-gradient-to-br from-indigo-50 to-purple-50"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <header className="flex items-center justify-between mb-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-900">
            {data.firstName}
            <span className="text-purple-600">_</span>
          </h1>
          <p className="text-2xl text-gray-600">{data.lastName}</p>
        </div>
        <div className="text-right">
          <p className="text-purple-600">{data.email}</p>
          <p className="text-gray-600">
            {data.address.city}, {data.address.country}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Profile</h2>
            <p className="text-gray-700 leading-relaxed">{data.about}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Experiences</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold">{data.previousJob.title}</h3>
                <p className="text-purple-600">{data.previousJob.companyName}</p>
                <p className="text-sm text-gray-500">
                  {data.previousJob.startDate.startMonth} {data.previousJob.startDate.startYear} - 
                  {data.previousJob.endDate.endMonth} {data.previousJob.endDate.endYear}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Skills</h2>
            <ul className="space-y-3">
              {data.skills.map((skill, index) => (
                <li 
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-sm flex items-center"
                >
                  <span className="text-purple-600 mr-2">◉</span>
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold">{data.college.name}</h3>
              <p className="text-purple-600 text-sm">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);


export const TemplateTen = ({ data }) => (
  <ResumePage>
    <div 
      className="h-full p-12 bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <header className="mb-16 text-center">
        <h1 className="text-6xl font-light text-gray-900 tracking-tight mb-2">
          {data.firstName}
        </h1>
        <p className="text-2xl text-gray-500">{data.lastName}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <p className="text-gray-600">{data.email}</p>
          <p className="text-gray-400">•</p>
          <p className="text-gray-600">
            {data.address.city}, {data.address.country}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Education
            </h2>
            <div>
              <h3 className="font-medium">{data.college.name}</h3>
              <p className="text-gray-600 text-sm">
                {data.college.degree.degreeName} in {data.college.degree.field}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {data.college.graduation.month} {data.college.graduation.year}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Skills
            </h2>
            <ul className="space-y-2">
              {data.skills.map((skill, index) => (
                <li 
                  key={index}
                  className="text-gray-700 text-sm before:content-['–'] before:mr-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Profile</h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl">{data.about}</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">{data.previousJob.title}</h3>
                <p className="text-gray-600">{data.previousJob.companyName}</p>
                <p className="text-sm text-gray-400">
                  {data.previousJob.startDate.startMonth} {data.previousJob.startDate.startYear} - 
                  {data.previousJob.endDate.endMonth} {data.previousJob.endDate.endYear}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

