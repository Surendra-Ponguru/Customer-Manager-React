import { useState } from "react";

import { useNavigate } from "react-router";
import Log1 from "../img/screenshots/log1.png";
import loglogo from '../img/screenshots/cust.png';
//import  loglogo from "../img/im.jpg";
import App from "../App";
import Customer from './Customer';


const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  // const users = [{ username: "user1", password: "pass1" }];
  const usernam = "user@gmail.com";
  const passwor = "pass";
  const handleSubmit = (e) => {
    e.preventDefault();
    // const account = users.find((user) => user.username === username);
    // if (account && account.password === password) {
    //   setauthenticated(true);
    //   localStorage.setItem("authenticated", true);
    //   <Navigate to='App'/>
    // }
    if (username == usernam && password == passwor) {
      localStorage.setItem("authenticated", true);
      navigate("../App");
    } else {
      localStorage.setItem("authenticated", false);
      navigate("../Login");
    }
  };
  return (
    <div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                <div class="form-container">
                    <form class="form-horizontal" onSubmit={handleSubmit}>
                        <h3 class="title">Customer Manager</h3>
                        <div class="form-group">
                            <input class="form-control" type="email" placeholder="Enter your Username"
                            onChange={(e) => setusername(e.target.value)}></input>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" placeholder="Enter your Password" 
                            onChange={(e) => setpassword(e.target.value)}></input>
                        </div>
                        <button class="btn signin">Login</button>
                        <span class="signup">or <a href="#">Sign up</a></span>
                        <span class="forgot"><a href="">Forgot Password?</a></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Login;
