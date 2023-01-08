import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import Feed from "./components/feed/Feed";
import RightBar from "./components/rightbar/RightBar";
import Profile from "./pages/profile/Profile";
import "./darkTheme.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";


function App() {
  //Authentication Context
  const {currentUser} = useContext(AuthContext);

  //dark mode context
  const {darkMode} = useContext(DarkModeContext)

  //Layout
  const Layout = () =>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
            <div style={{flex: 6}}>
              <Feed/>
            </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  //Route Protection
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  //Route Paths
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])

  //Return Components
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
