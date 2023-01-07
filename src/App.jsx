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


function App() {

  const currentUser = true;

  //Layout
  const Layout = () =>{
    return(
      <>
        <NavBar/>
        <div>
          <LeftBar/>
          <Feed/>
          <RightBar/>
        </div>
      </>
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
