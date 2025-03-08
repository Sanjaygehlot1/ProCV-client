# ProCV - Resume Builder

ProCV is a powerful and user-friendly resume builder web application designed to help users create professional resumes with ease. Built using the MERN stack (MongoDB, Express, React, Node.js), it provides a seamless and interactive experience for users to generate, customize, and download resumes.

## Features

### Resume Creation
- Fill in personal details, work experience, education, and skills
- Choose from multiple resume templates
- Real-time preview of the resume

### Customization & Download
- Edit and update resume details anytime
- Download resume in PDF format

### Additional Features
- AI-powered resume suggestions

## Tech Stack

### Frontend
- React.js (Vite setup)
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests

### Backend
- Node.js & Express.js for the server
- MongoDB & Mongoose for the database

## Installation & Setup

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Sanjaygehlot1/ProCV-server.git
   cd ProCV-server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the required environment variables:
   ```env
   PORT=8000
   URI=your_mongodb_connection_string
   CORS_ORIGIN=your_frontend_url
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Sanjaygehlot1/ProCV-client.git
   cd ProCV-client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the frontend folder:
   ```env
   VITE_BACKEND_URL=http://localhost:8000/api/v1
   VITE_PORT=3000
   ```
4. Start the frontend server:
   ```sh
   npm run dev
   ```

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, commit your changes, and submit a pull request.

## Support
If you find this project helpful, please give it a ⭐ on GitHub!

For any queries, feel free to ask!

