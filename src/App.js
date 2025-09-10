import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Admin interface Imports
import AdminBase from "./base/AdminBase";
import Dashboard from "./components/adminInterface/pages/dashboard/Dashboard";
import ANotice from "./components/adminInterface/pages/Notice/Notice";
import AEvents from "./components/adminInterface/pages/Eevent/Eevent";
import AGallery from "./components/adminInterface/pages/Gallery/Gallery";
import Staff from "./components/adminInterface/pages/Staff/Staff";
import Slider from "./components/adminInterface/pages/Slider/Slider";
import AdminLogin from "./components/adminInterface/pages/login/Login";
import ProtectedRoute from "./utils/ProtectedRoute";

// User interface Imports
import HomeBase from "./base/HomeBase";
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/AboutPage";
import Departments from "./pages/department/DepartmentPage";
import Notice from "./pages/notice/NoticeBoard";
import Events from "./ErrrorPages/UnderProcess/UnderProgress";
import Gallery from "./ErrrorPages/UnderProcess/UnderProgress";

const router = createBrowserRouter([
  // Login route
  {
    path: "/login",
    element: <AdminLogin />,
  },

  // Admin routes - protected
  {
    path: "/admin",
    element: <ProtectedRoute allowedRoles={["Admin", "SuperAdmin"]} />, // only Admin/SuperAdmin
    children: [
      {
        element: <AdminBase />,
        children: [
          { path: "Dashboard", element: <Dashboard /> },
          { path: "Notice", element: <ANotice /> },
          { path: "Events", element: <AEvents /> },
          { path: "gallery", element: <AGallery /> },
          { path: "staff", element: <Staff /> },
          { path: "slider", element: <Slider /> },
        ],
      },
    ],
  },

  // Public routes
  {
    path: "/",
    element: <HomeBase />,
    children: [
      { index: true, element: <Home /> },
      { path: "departments", element: <Departments /> },
      { path: "gallery", element: <Gallery /> },
      { path: "notice", element: <Notice /> },
      { path: "events", element: <Events /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
