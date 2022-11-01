import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
            <div className="card__left">
                <h1>Social Media</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa ducimus inventore provident 
                    doloremque eligendi accusamus ipsa. Vel, inventore ipsum! Harum natus ipsum ratione excepturi.
                </p>

                <span>Already have an account ?</span>
                <Link to="/login"><button>Login</button></Link>
                
            </div>

            <div className="card__right">
                <h1>Register</h1>
                <form action="#">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Name"/>

                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register