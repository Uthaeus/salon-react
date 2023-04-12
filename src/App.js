import { useContext, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import LashcarePage from "./pages/lashcare";
import AppointmentsPage from "./pages/appointments";
import ErrorPage from "./pages/error";
import FaqsPage from "./pages/faqs";
import SignUp from "./components/Authentication/sign-up";
import Login from "./components/Authentication/login";
import EditProfile from "./components/Authentication/edit-profile";
import HairServices from "./pages/hair-services";
import LashServices from "./pages/lash-services";
import { AuthContext } from "./store/auth-context";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/lashcare',
        element: <LashcarePage />
      },
      {
        path:'/faqs',
        element: <FaqsPage />
      },
      {
        path: '/appointments',
        element: <AppointmentsPage />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/edit-profile',
        element: <EditProfile />
      },
      {
        path: '/hair-services',
        element: <HairServices />
      },
      {
        path: '/lash-services',
        element: <LashServices />
      }
    ]
  }
]);

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authCtx.login();
    }
  }, [])

  return <RouterProvider router={router} />
}

export default App;
