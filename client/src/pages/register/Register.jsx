import { Link } from "react-router-dom"
import "./register.scss"
import { useState } from "react"
import axios from 'axios'

function Register() {

    // user inputs state
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    })

    // error state
    const [err, setErr] = useState(null)

    // handle user inputs
    const handleChange = (e) =>{
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    // handle user data submits with axios
    const handleClick = async (e) => {
        // on click don't load webpage
        e.preventDefault();

        // using axios send inputs state data to database
        try{
           await axios.post('http://localhost:7000/api/auth/register', inputs)
        }
        catch(err){
            // show response data on console
            setErr(err.response.data)
        }
    }

    // console log err
    console.log(err)

  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quasi, 
                    aspernatur minima delectus eius tempore architecto deleniti explicabo dolorum quo odio eligendi eveniet, libero distinctio sed, magni illo voluptatibus totam!
                </p>
                <span>Already have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            <div className="right">          
                <h1>Register</h1>
                <form action="#">
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                    <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    {err && err} {/* if user exist then show the response */} 
                    <button type="submit" onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register