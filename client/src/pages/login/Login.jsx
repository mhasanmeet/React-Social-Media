import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import "./login.scss"

function Login() {
    const { login } = useContext(AuthContext)

    const handleLogin = () =>{
        login()
    }

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quasi, 
                    aspernatur minima delectus eius tempore architecto deleniti explicabo dolorum quo odio eligendi eveniet, libero distinctio sed, magni illo voluptatibus totam!
                </p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="#">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login