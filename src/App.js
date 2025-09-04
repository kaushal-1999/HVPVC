import { RouterProvider, createBrowserRouter } from 'react-router-dom';



import HomeBase from './base/HomeBase';
import Home from './pages/Home';


const router = createBrowserRouter([
  // {
  //   path: '/login',
  //   element: <AdminLogin />,
  // // },
  // {
  //   path: '/admin',
  //   element: <Protected />,
  //   children: [
  //     {
  //       path: '',
  //       element: <AdminBase />,
  //       children: [
  //         {
  //           path: 'dashboard',
  //           element: <Dashboard />,
  //         },
  //         {
  //           path: 'membership',
  //           element: <Member />,
  //         },
  //         {
  //           path: 'letestactivity',
  //           element: <LatestActivity />,
  //         },
  //         {
  //           path: 'slider',
  //           element: <Slider />,
  //         },
  //         {
  //           path: 'gallery',
  //           element: <Gallery />,
  //         },
  //         {
  //           path: 'team',
  //           element: <Team />,
  //         },
  //         {
  //           path: 'youtube',
  //           element: <Youtube />,
  //         },
  //         {
  //           path: 'files',
  //           element: <Files />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    path: '/',
    element: <HomeBase />,
    children: [
      {
        index: true, // shorthand for path: '/'
        element: <Home />,
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
