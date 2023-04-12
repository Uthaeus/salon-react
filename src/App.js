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
import ProductRoot from "./pages/product-root";
import ProductsPage from "./components/Products/products";
import ProductShow from "./components/Products/product-show";
import { ProductContext } from "./store/product-context";
import { PRODUCTS } from "./store/DUMMY_DATA";

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
  },
  {
    path: '/products',
    element: <ProductRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />
      },
      {
        path: 'products/:id',
        element: <ProductShow />
      }
    ]
  }
]);

function App() {
  const authCtx = useContext(AuthContext);
  const prodCtx = useContext(ProductContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authCtx.login();
    }
    if (prodCtx.products.length < 1) {
      prodCtx.initializeProducts(PRODUCTS);
    }
  }, [])

  return <RouterProvider router={router} />
}

export default App;
