import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home page/home';
import Menu from './components/menu bar/menu';
import ContactUs from './components/contact us/contact';
import AboutUs from './components/about/about';
import Agents from './components/agents/agent';
import Property from './components/property/property';
import Blogs from './components/blogs/blog';
import Blog_page from './components/blogs/blog_page/blog_page';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Menu />
        <Home />
       
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Menu />
        <AboutUs />
        
      </>
    ),
  },
  {
    path: "/agents",
    element: (
      <>
        <Menu />
        <Agents />
       
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <Menu />
        <Blogs />
       
      </>
    ),
  },
  {
    path: "/properties",
    element: (
      <>
        <Menu />
        <Property/>
      
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Menu />
        <ContactUs />
       
      </>
    ),
  },
  
]);








function App() {
  return (
    
      <div>
    
    <RouterProvider router={router}/>
        
      </div>
    
  );
}

export default App;
