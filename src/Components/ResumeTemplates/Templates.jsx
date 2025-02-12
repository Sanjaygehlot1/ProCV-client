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
      <h1
        className="text-5xl font-bold text-blue-800 mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
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
            <p className="font-semibold">{data.college.name}</p>
            <p>{data.college.degree.degreeName} in {data.college.degree.field}</p>
            <p className="text-sm text-gray-600">
              {data.college.graduation.month} {data.college.graduation.year}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.about}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">{data.previousJob.title}</h3>
              <p className="text-blue-600">{data.previousJob.companyName}</p>
              <p className="text-sm text-gray-500">
                {data.previousJob?.startDate?.startMonth} {data.previousJob?.startDate?.startYear} -
                {data.previousJob?.endDate?.endMonth} {data.previousJob?.endDate?.endYear}
              </p>
            </div>
          </div>
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
                {data.address.city}, {data.address.country}
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
                Graduated: {data.college.graduation.month} {data.college.graduation.year}
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

