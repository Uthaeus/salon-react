import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/root";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import LashcarePage from "./pages/lashcare";
import AppointmentsPage from "./pages/appointments";
import ErrorPage from "./pages/error";
import FaqsPage from "./pages/faqs";

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
        path:'faqs',
        element: <FaqsPage />
      },
      {
        path: '/appointments',
        element: <AppointmentsPage />
      },
      {
        path: '/sign-up',
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
