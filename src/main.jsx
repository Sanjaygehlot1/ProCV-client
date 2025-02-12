import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './Store/store'; // Ensure correct store import

import App from './App.jsx';
import Templates from './Pages/Templates.jsx';
import GetStarted from './Pages/GetStarted';
import FinalPage from './Pages/FinalPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignupPage';
import ResumeBuilder from './Pages/ResumeBuilderPage.jsx';
import PersonalDetails from './Components/React Components/PersonalDetails.jsx';
import Education from './Components/React Components/Education.jsx';

import './index.css';
import Experience from './Components/React Components/Experience';
import Skills from './Components/React Components/Skills';
import About from './Components/React Components/About';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      { element: <GetStarted />, path: '/' },
      { element: <LoginPage />, path: '/login' },
      { element: <SignUpPage />, path: '/register' },
      { element: <Templates />, path: '/templates' },
      { element: <FinalPage />, path: '/final/:resumeId' },
      { 
        element: <ResumeBuilder />, 
        path: '/create',
        children: [
          { element: <PersonalDetails />, path: '/create/personal-details' },
          { element: <Education />, path: '/create/education' },
          { element: <Experience/>,  path: '/create/professional-experience' },
          { element: <Skills/>,  path: '/create/skills' },
          { element: <About/>,  path: '/create/summary' },
          { element: <FinalPage/>,  path: '/create/finalize' },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
