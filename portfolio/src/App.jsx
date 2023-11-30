import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import Header from './components/Header.jsx';
import ErrorPage from './components/ErrorPage.jsx';


function App() {
  let router = createBrowserRouter([{
    path : "/" , 
    element : <Homepage/>, 
    errorElement : <ErrorPage/>
  }, 
]);
  
  return (
    <>
      <Header />
      <RouterProvider router = {router} />
    </>
  )
}

export default App
