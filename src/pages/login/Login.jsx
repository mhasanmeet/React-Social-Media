import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {

    const {login} = useContext(AuthContext);
    const handleLogin = () =>{
        login()
    }

  return (
    <div className="login">
        <div className="card">
            <div className="card__left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa ducimus inventore provident 
                    doloremque eligendi accusamus ipsa. Vel, inventore ipsum! Harum natus ipsum ratione excepturi 
                    fugiat quaerat at suscipit optio magni. Porro quis fuga eligendi tempora! Hic id adipisci atque.
                </p>

                <span>Don't you have an account ?</span>
                <Link to="/register"><button>Register</button></Link>
            </div>

            <div className="card__right">
                <h1>Login</h1>
                <form action="#">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login