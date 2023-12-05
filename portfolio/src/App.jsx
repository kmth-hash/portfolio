import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications';

function App() {
  let router = createBrowserRouter([{
    path : "/" , 
    element : <Homepage/>, 
    errorElement : <ErrorPage/>
  }, 
  {
    path : "/projects" , 
    element : <Projects/>, 
    errorElement : <ErrorPage/>
  }, 
  {
    path : "/certifications",
    element : <Certifications />,
    errorElement : <ErrorPage />
  }
]);
  
  return (
    <>
      
      <RouterProvider router = {router} />
    </>
  )
}

export default App
