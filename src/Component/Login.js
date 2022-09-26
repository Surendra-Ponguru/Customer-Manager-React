import { useState } from "react";

import { useNavigate } from "react-router";
import Log1 from "../img/screenshots/log1.png";
import loglogo from '../img/i1.png';
//import  loglogo from "../img/im.jpg";
import App from "../App";


const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  // const users = [{ username: "user1", password: "pass1" }];
  const usernam = "user";
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
    <div>
    <div style={{display:"flex",backgroundColor:"lightblue",height:"600px",flexWrap:"wrap"}}>
       <div className="logDiv">
        <img src={loglogo} name="name" style={{height:"350px",width:"250px",marginRight:"200px"}}></img>
      </div>
      <div className="logDiv1">
        <img src={Log1} name="name" className="LogImg"></img>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label className="loglabel">Username</label>
              </td>
              <td>
                <input
                  type="text"
                  name="Username"
                  value={username}
                  className="loginput"
                  onChange={(e) => setusername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="loglabel">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="Password"
                  className="loginput"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <input type="submit" value="Submit"  className=" logSubmit" />
            </tr>
          </table>
        </form>
      </div>
     
    </div>
    </div>
  );
};

export default Login;
