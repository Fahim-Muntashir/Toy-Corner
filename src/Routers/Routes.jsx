import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Login/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";
import AddToyPage from "../Pages/AddToyPage/AddToyPage";
import AllToy from "../Pages/AllToy/AllToy";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyToy from "../Pages/MyToy/MyToy";
import Update from "../Pages/Update/Update";

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
        path: "my-toys",
        element: (
          <PrivateRoutes>
            {" "}
            <MyToy></MyToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "add-toy",
        element: (
          <PrivateRoutes>
            <AddToyPage></AddToyPage>,
          </PrivateRoutes>
        ),
      },
      {
        path: "all-toys",
        element: <AllToy></AllToy>,
      },
      {
        path: "all-toys/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-corner-server.onrender.com/alltoy/${params.id}`),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <Update></Update>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
