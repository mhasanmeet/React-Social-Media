import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {

  //Contexts
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext);

  //Home Page Layout
  const Layout = () =>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
            <LeftBar/>
              <div style={{flex: "6"}}>
                <Outlet/>
              </div>
            <RightBar/>
        </div>
      </div>
    )
  }

  //Protected Route
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  //Routing
  const router = createBrowserRouter([
    {
      path: "/",

      //Layout with protected Layout Routes
      element:  <ProtectedRoute>
                  <Layout/>
                </ProtectedRoute>
                ,
      //Layout Route for Home Page
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },

    //Login Route
    {
      path: "/login",
      element: <Login/>,
    },

    //Register Route
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
