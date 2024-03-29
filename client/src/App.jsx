import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./darkTheme.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
// import React query
import {QueryClient, QueryClientProvider} from 'react-query'


function App() {
  //Authentication Context
  const {currentUser} = useContext(AuthContext);

  //dark mode context
  const {darkMode} = useContext(DarkModeContext)

  // get query client
  const queryClient = new QueryClient()

  //Layout
  const Layout = () =>{
    return(
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <NavBar/>
          <div style={{display: "flex"}}>
            <LeftBar/>
              <div style={{flex: 6}}>
                {/* Switch Between Home and Profile */}
                <Outlet/>
              </div>
            <RightBar/>
          </div>
        </div>
      </QueryClientProvider>
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
      // protected routes
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

    //Public routes
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
