import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Login/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";
import AddToyPage from "../Pages/AddToyPage/AddToyPage";
import AllToy from "../Pages/AllToy/AllToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "add-toy",
        element: <AddToyPage></AddToyPage>,
      },
      {
        path: "all-toys",
        element: <AllToy></AllToy>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
