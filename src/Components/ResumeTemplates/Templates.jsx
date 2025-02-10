import React from "react";

const ResumePage = ({ children }) => (
  <div
    style={{
      width: "8.5in",
      height: "11in",
      margin: "0.5in auto",
      fontSize: "12pt",
    }}
    className="bg-white shadow overflow-hidden p-4"
  >
    {children}
  </div>
);

export const TemplateOne = ({ data }) => (
  <ResumePage>
    <header className="border-b pb-4 mb-4">
      <h1 className="text-4xl font-bold">
        {data.firstName} {data.lastName || ""}
      </h1>
      <p className="text-gray-600">
        {data.email} | {data.phoneNumber || "N/A"}
      </p>
      <p className="text-gray-600">
        {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
      </p>
    </header>
    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">About</h2>
      <p>{data.about}</p>
    </section>
    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Education</h2>
      <p className="font-semibold">
        {data.college?.name} ({data.college?.degree})
      </p>
      <p>{data.college?.location}</p>
      <p>
        Graduated: {data.college?.graduation?.month || ""}{" "}
        {data.college?.graduation?.year || ""}
      </p>
    </section>
    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Experience</h2>
      <p>{data.previousJob?.companyName || ""}</p>
      <p>{data.previousJob?.title}</p>
      <p>
        {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc list-inside">
        {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
      </ul>
    </section>
  </ResumePage>
);

export const TemplateTwo = ({ data }) => (
  <ResumePage>
    <div className="flex flex-col md:flex-row h-full">
      <aside className="md:w-1/3 bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">
          {data.firstName} {data.lastName || ""}
        </h1>
        <p>{data.email}</p>
        <p>{data.phoneNumber || "N/A"}</p>
        <p>
          {data.address?.city}, {data.address?.country}
        </p>
        <p>{data.address?.pinCode}</p>
      </aside>
      <main className="md:w-2/3 p-4 bg-white">
        <section className="mb-4">
          <h2 className="text-xl font-semibold">About</h2>
          <p>{data.about}</p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="font-bold">
            {data.college?.name} ({data.college?.degree})
          </p>
          <p>{data.college?.location}</p>
          <p>
            Graduated: {data.college?.graduation?.month || ""}{" "}
            {data.college?.graduation?.year || ""}
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Experience</h2>
          <p>{data.previousJob?.companyName || ""}</p>
          <p>{data.previousJob?.title}</p>
          <p>
            {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
          </ul>
        </section>
      </main>
    </div>
  </ResumePage>
);

export const TemplateThree = ({ data }) => (
  <ResumePage>
    <header className="mb-6 text-center">
      <h1 className="text-4xl font-bold">
        {data.firstName} {data.lastName || ""}
      </h1>
      <p className="text-gray-600">
        {data.email} | {data.phoneNumber || "N/A"}
      </p>
      <p className="text-gray-600">
        {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
      </p>
    </header>
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">About</h2>
        <p>{data.about}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
        <div className="ml-4">
          <p className="font-bold">
            {data.college?.name} ({data.college?.degree})
          </p>
          <p>{data.college?.location}</p>
          <p>
            Graduated: {data.college?.graduation?.month || ""}{" "}
            {data.college?.graduation?.year || ""}
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>
        <div className="ml-4">
          <p>{data.previousJob?.companyName || ""}</p>
          <p>{data.previousJob?.title}</p>
          <p>
            {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
        </ul>
      </section>
    </div>
  </ResumePage>
);

export const TemplateFour = ({ data }) => (
  <ResumePage>
    <div className="flex flex-col md:flex-row h-full">
      <main className="md:w-2/3 p-4">
        <h1 className="text-4xl font-bold">
          {data.firstName} {data.lastName || ""}
        </h1>
        <p className="text-gray-600">
          {data.email} | {data.phoneNumber || "N/A"}
        </p>
        <p className="text-gray-600">
          {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
        </p>
        <section className="mt-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p>{data.about}</p>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p>{data.previousJob?.companyName || ""}</p>
          <p>{data.previousJob?.title}</p>
          <p>
            {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
          </p>
        </section>
      </main>
      <aside className="md:w-1/3 p-4 bg-white border-l">
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="font-bold">
            {data.college?.name} ({data.college?.degree})
          </p>
          <p>{data.college?.location}</p>
          <p>
            Graduated: {data.college?.graduation?.month || ""}{" "}
            {data.college?.graduation?.year || ""}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
          </ul>
        </section>
      </aside>
    </div>
  </ResumePage>
);

export const TemplateFive = ({ data }) => (
  <ResumePage>
    <div className="bg-indigo-600 text-white p-6">
      <h1 className="text-4xl font-bold">
        {data.firstName} {data.lastName || ""}
      </h1>
      <p>
        {data.email} | {data.phoneNumber || "N/A"}
      </p>
      <p>
        {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
      </p>
    </div>
    <div className="p-6">
      <section className="mb-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p>{data.about}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="font-bold">
          {data.college?.name} ({data.college?.degree})
        </p>
        <p>{data.college?.location}</p>
        <p>
          Graduated: {data.college?.graduation?.month || ""}{" "}
          {data.college?.graduation?.year || ""}
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p>{data.previousJob?.companyName || ""}</p>
        <p>{data.previousJob?.title}</p>
        <p>
          {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
        </ul>
      </section>
    </div>
  </ResumePage>
);

export const TemplateSix = ({ data }) => (
  <ResumePage>
    <header className="bg-gray-800 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">
        {data.firstName} {data.lastName || ""}
      </h1>
      <p>
        {data.email} | {data.phoneNumber || "N/A"}
      </p>
      <p>
        {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
      </p>
    </header>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">About</h2>
        <p>{data.about}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
        <p className="font-bold">
          {data.college?.name} ({data.college?.degree})
        </p>
        <p>{data.college?.location}</p>
        <p>
          Graduated: {data.college?.graduation?.month || ""}{" "}
          {data.college?.graduation?.year || ""}
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>
        <p>{data.previousJob?.companyName || ""}</p>
        <p>{data.previousJob?.title}</p>
        <p>
          {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.length !== 0 ?data.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          )): ""}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2">Background</h2>
        <p>{data.about}</p>
      </section>
    </div>
  </ResumePage>
);

export const TemplateSeven = ({ data }) => (
  <ResumePage>
    <header className="mb-4">
      <h1 className="text-3xl font-bold">
        {data.firstName} {data.lastName || ""}
      </h1>
      <p>
        {data.email} | {data.phoneNumber || "N/A"}
      </p>
      <p>
        {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
      </p>
    </header>
    <section className="mb-4">
      <h2 className="text-xl font-semibold">About</h2>
      <p>{data.about}</p>
    </section>
    <section className="mb-4">
      <h2 className="text-xl font-semibold">Education</h2>
      <p className="font-bold">
        {data.college?.name} ({data.college?.degree})
      </p>
      <p>{data.college?.location}</p>
      <p>
        Graduated: {data.college?.graduation?.month || ""}{" "}
        {data.college?.graduation?.year || ""}
      </p>
    </section>
    <section className="mb-4">
      <h2 className="text-xl font-semibold">Experience</h2>
      <p>{data.previousJob?.companyName || ""}</p>
      <p>{data.previousJob?.title}</p>
      <p>
        {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
      </p>
    </section>
    <section>
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="list-disc list-inside">
        {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
      </ul>
    </section>
  </ResumePage>
);

export const TemplateEight = ({ data }) => (
  <ResumePage>
    <div className="flex h-full">
      <aside className="w-1/3 bg-purple-700 text-white p-4">
        <h1 className="text-3xl font-bold">
          {data.firstName} {data.lastName || ""}
        </h1>
        <p>{data.email}</p>
        <p>{data.phoneNumber || "N/A"}</p>
        <p>
          {data.address?.city}, {data.address?.country}
        </p>
        <p>{data.address?.pinCode}</p>
        <section className="mt-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
          </ul>
        </section>
      </aside>
      <main className="w-2/3 p-4 bg-white">
        <section className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-2">About</h2>
          <p>{data.about}</p>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
          <p className="font-bold">
            {data.college?.name} ({data.college?.degree})
          </p>
          <p>{data.college?.location}</p>
          <p>
            Graduated: {data.college?.graduation?.month || ""}{" "}
            {data.college?.graduation?.year || ""}
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>
          <p>{data.previousJob?.companyName || ""}</p>
          <p>{data.previousJob?.title}</p>
          <p>
            {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
          </p>
        </section>
      </main>
    </div>
  </ResumePage>
);

export const TemplateNine = ({ data }) => (
  <ResumePage>
    <div className="border h-full flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-4xl font-bold">
          {data.firstName} {data.lastName || ""}
        </h1>
        <p>
          {data.email} | {data.phoneNumber || "N/A"}
        </p>
        <p>
          {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
        </p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <div>
          <section className="mb-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <p>{data.about}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside">
              {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
            </ul>
          </section>
        </div>
        <div>
          <section className="mb-4">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="font-bold">
              {data.college?.name} ({data.college?.degree})
            </p>
            <p>{data.college?.location}</p>
            <p>
              Graduated: {data.college?.graduation?.month || ""}{" "}
              {data.college?.graduation?.year || ""}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p>{data.previousJob?.companyName || ""}</p>
            <p>{data.previousJob?.title}</p>
            <p>
              {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
            </p>
          </section>
        </div>
      </div>
    </div>
  </ResumePage>
);

export const TemplateTen = ({ data }) => (
  <ResumePage>
    <div className="h-40 bg-gray-300 flex items-center justify-center">
      <span className="text-2xl text-gray-700">Header Image</span>
    </div>
    <div className="p-6">
      <header className="mb-4 text-center">
        <h1 className="text-4xl font-bold">
          {data.firstName} {data.lastName || ""}
        </h1>
        <p>
          {data.email} | {data.phoneNumber || "N/A"}
        </p>
        <p>
          {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
        </p>
      </header>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p>{data.about}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="font-bold">
          {data.college?.name} ({data.college?.degree})
        </p>
        <p>{data.college?.location}</p>
        <p>
          Graduated: {data.college?.graduation?.month || ""}{" "}
          {data.college?.graduation?.year || ""}
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p>{data.previousJob?.companyName || ""}</p>
        <p>{data.previousJob?.title}</p>
        <p>
          {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
        </p>
      </section>
      <section className="mt-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
        </ul>
      </section>
    </div>
  </ResumePage>
);

export const TemplateEleven = ({ data }) => (
  <ResumePage>
    <div className="flex h-full">
      <aside className="w-1/3 bg-green-600 text-white p-6">
        <h1 className="text-3xl font-bold">
          {data.firstName} {data.lastName || ""}
        </h1>
        <p>{data.email}</p>
        <p>{data.phoneNumber || "N/A"}</p>
        <p>
          {data.address?.city}, {data.address?.country}
        </p>
        <p>{data.address?.pinCode}</p>
        <section className="mt-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
          </ul>
        </section>
      </aside>
      <main className="w-2/3 p-6 bg-white">
        <section className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-2">About</h2>
          <p>{data.about}</p>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
          <p className="font-bold">
            {data.college?.name} ({data.college?.degree})
          </p>
          <p>{data.college?.location}</p>
          <p>
            Graduated: {data.college?.graduation?.month || ""}{" "}
            {data.college?.graduation?.year || ""}
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>
          <p>{data.previousJob?.companyName || ""}</p>
          <p>{data.previousJob?.title}</p>
          <p>
            {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
          </p>
        </section>
      </main>
    </div>
  </ResumePage>
);

export const TemplateTwelve = ({ data }) => (
  <ResumePage>
    <header className="text-center mb-6">
      <h1 className="text-4xl font-bold">
        {data.firstName} {data.lastName || ""}
      </h1>
      <p>
        {data.email} | {data.phoneNumber || "N/A"}
      </p>
      <p>
        {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
      </p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="bg-white p-4 shadow">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="font-bold">
          {data.college?.name} ({data.college?.degree})
        </p>
        <p>{data.college?.location}</p>
        <p>
          Graduated: {data.college?.graduation?.month || ""}{" "}
          {data.college?.graduation?.year || ""}
        </p>
      </section>
      <section className="bg-white p-4 shadow">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p>{data.previousJob?.companyName || ""}</p>
        <p>{data.previousJob?.title}</p>
        <p>
          {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
        </p>
      </section>
    </div>
    <section className="mt-6 bg-white p-4 shadow">
      <h2 className="text-2xl font-semibold mb-2">About & Skills</h2>
      <p>{data.about}</p>
      <p className="mt-2">
        <strong>Skills:</strong>
      </p>
      <ul className="list-disc list-inside">
        {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
      </ul>
    </section>
  </ResumePage>
);

export const TemplateThirteen = ({ data }) => (
  <ResumePage>
    <div
      className="h-32 bg-cover bg-center"
      style={{ backgroundImage: "url(https://via.placeholder.com/600x200)" }}
    ></div>
    <div className="p-6">
      <header className="mb-4 text-center">
        <h1 className="text-4xl font-bold">
          {data.firstName} {data.lastName || ""}
        </h1>
        <p>
          {data.email} | {data.phoneNumber || "N/A"}
        </p>
        <p>
          {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
        </p>
      </header>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p>{data.about}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="font-bold">
          {data.college?.name} ({data.college?.degree})
        </p>
        <p>{data.college?.location}</p>
        <p>
          Graduated: {data.college?.graduation?.month || ""}{" "}
          {data.college?.graduation?.year || ""}
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p>{data.previousJob?.companyName || ""}</p>
        <p>{data.previousJob?.title}</p>
        <p>
          {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
        </p>
      </section>
      <section className="mt-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
        </ul>
      </section>
    </div>
  </ResumePage>
);

export const TemplateFourteen = ({ data }) => (
  <ResumePage>
    <header className="mb-4 border-b pb-4 text-center">
      <h1 className="text-4xl font-bold">
        {data.firstName} {data.lastName || ""}
      </h1>
      <p>
        {data.email} | {data.phoneNumber || "N/A"}
      </p>
      <p>
        {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
      </p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p>{data.previousJob?.companyName || ""}</p>
        <p>{data.previousJob?.title}</p>
        <p>
          {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
        </ul>
      </section>
    </div>
    <section className="mt-4">
      <h2 className="text-2xl font-semibold">About</h2>
      <p>{data.about}</p>
    </section>
    <section className="mt-4 border-t pt-4">
      <h2 className="text-2xl font-semibold">Education</h2>
      <p className="font-bold">
        {data.college?.name} ({data.college?.degree})
      </p>
      <p>{data.college?.location}</p>
      <p>
        Graduated: {data.college?.graduation?.month || ""}{" "}
        {data.college?.graduation?.year || ""}
      </p>
    </section>
  </ResumePage>
);

export const TemplateFifteen = ({ data }) => (
  <ResumePage>
    <div className="space-y-4">
      <div className="p-6">
        <header className="mb-4 text-center">
          <h1 className="text-4xl font-bold">
            {data.firstName} {data.lastName || ""}
          </h1>
          <p>
            {data.email} | {data.phoneNumber || "N/A"}
          </p>
          <p>
            {data.address?.city}, {data.address?.country} - {data.address?.pinCode}
          </p>
        </header>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 shadow rounded bg-white">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="font-bold">
            {data.college?.name} ({data.college?.degree})
          </p>
          <p>{data.college?.location}</p>
          <p>
            Graduated: {data.college?.graduation?.month || ""}{" "}
            {data.college?.graduation?.year || ""}
          </p>
        </div>
        <div className="p-6 shadow rounded bg-white">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <p>{data.previousJob?.companyName || ""}</p>
          <p>{data.previousJob?.title}</p>
          <p>
            {data.previousJob?.startDate || ""} - {data.previousJob?.endDate || ""}
          </p>
        </div>
      </div>
      <div className="p-6 shadow rounded bg-white">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>{data.about}</p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.length !== 0 ? data.skills.map((skill) => <li key={skill}>{skill}</li>): ""}
        </ul>
      </div>
    </div>
  </ResumePage>
);
