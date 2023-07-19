import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import "./login.scss"

function Login() {
     // user inputs state
     const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })

    // navigate/page redirect using react router
    const navigate = useNavigate()

    // error state
    const [err, setErr] = useState(null)

    // handle user inputs
    const handleChange = (e) =>{
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const { login } = useContext(AuthContext)

    const handleLogin = async (e) =>{
        // on click don't load webpage
        e.preventDefault();

        // axios 
        try{
           await login(inputs)
           navigate("/") //if user data correct redirect to homepage
        }
        catch(err){
            setErr(err.response.data)
        }
    }

    // console log err
    console.log(err)

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
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="text" placeholder="Password" name="password" onChange={handleChange}/>
                    {err && err} {/* if user exist then show the response */} 
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login