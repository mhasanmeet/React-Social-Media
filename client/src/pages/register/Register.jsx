import { Link } from "react-router-dom"
import "./register.scss"

function Register() {
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
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register