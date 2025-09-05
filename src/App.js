import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomeBase from './base/HomeBase';
import Home from './pages/Home';
import Contact from './pages/contact/Contact';
import About from './ErrrorPages/UnderProcess/UnderProgress';
import Departments from './ErrrorPages/UnderProcess/UnderProgress';
import Notice from './ErrrorPages/UnderProcess/UnderProgress';
import Events from './ErrrorPages/UnderProcess/UnderProgress';
import Gallery from './ErrrorPages/UnderProcess/UnderProgress';
// import AdminLogin from './pages/admin/AdminLogin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeBase />,
    children: [
      {
        index: true, // default route for '/'
        element: <Home />,
      },
      {
        path: 'departments', // '/departments'
        element: <Departments />,
      },
      {
        path: 'gallery', // '/gallery'
        element: <Gallery />,
      },
      {
        path: 'notice', // '/notice'
        element: <Notice />,
      },
      {
        path: 'events', // '/contact'
        element: <Events />,
      },
      {
        path: 'about', // '/about'
        element: <About />,
      },
      {
        path: 'contact', // '/contact'
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
