import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import { store, persistor } from './Store/store'; 

import App from './App.jsx';
import Templates from './Pages/Templates.jsx';
import GetStarted from './Pages/GetStarted';
import FinalPage from './Pages/FinalPage';
import ResumeBuilder from './Pages/ResumeBuilderPage.jsx';
import PersonalDetails from './components/React_Components/PersonalDetails.jsx';
import Education from './components/React_Components/Education.jsx';

import './index.css';
import Experience from './components/React_Components/Experience';
import Skills from './components/React_Components/Skills';
import About from './components/React_Components/About';
import AddProjects from './components/React_Components/Projects';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      { element: <GetStarted />, path: '/' },
      { element: <Templates />, path: '/templates' },
      { 
        element: <ResumeBuilder />, 
        path: '/create',
        children: [
          { element: <PersonalDetails />, path: '/create/personal-details' },
          { element: <Education />, path: '/create/education' },
          { element: <Experience/>,  path: '/create/professional-experience' },
          { element: <Skills/>,  path: '/create/skills' },
          { element: <AddProjects/>,  path: '/create/projects' },
          { element: <About/>,  path: '/create/summary' },
          { element: <FinalPage/>,  path: '/create/finalize' },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
);
