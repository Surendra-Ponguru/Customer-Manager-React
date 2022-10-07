import { useState } from "react";
import { useNavigate } from "react-router";



const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  
  const usernam = "user@gmail.com";
  const passwor = "pass";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === usernam && password === passwor) {
      localStorage.setItem("authenticated", true);
      navigate("../App");
    } else {
      localStorage.setItem("authenticated", false);
      navigate("../Login");
    }
  };
  return (
    <div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                <div className="form-container">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <h3 className="title">Customer Manager</h3>
                        <div className="form-group">
                            <input className="form-control" type="email" placeholder="Enter your Username"
                            onChange={(e) => setusername(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" placeholder="Enter your Password" 
                            onChange={(e) => setpassword(e.target.value)}></input>
                        </div>
                        <button className="btn signin">Login</button>
                        <span className="signup">or <a href="#">Sign up</a></span>
                        <span className="forgot"><a href="">Forgot Password?</a></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Login;
