import React, {useState} from "react";
import Button from "./Button";
import "../Styles/Register.scss";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  function handleNameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleClick() {
    fetch(`/user/register?username=${username}&password=${password}`, {
      method: "POST"
    })
    .then(res => {
      if (!res.ok) {
        //Gives error message if registration is not successful
        res.text().then(text => {
          setMessage(text);
          console.error(text);
        })
      } else {
        //Redirects to home page if registration is successful
        props.history.push("/");
      }
    });
    setUsername("");
    setPassword("");
  }

  return (
    <div className="register">
      <p className="regTitle">Register new user</p>
      {message ? <p>***{message}***</p> : null}
      <div className="inputBox">
        <label htmlFor="regUsernameContainer">Username</label>
        <div className="inputContainer" id="regUsernameContainer">
          <input type="text"
                  id="regUsername"
                  value={username}
                  onChange={handleNameChange}
          />
        </div>
      </div>
      <div className="inputBox">
      <label htmlFor="regPasswordContainer">Password</label>
        <div className="inputContainer" id="regPasswordContainer">
          <input type="password"
                  id="regPassword"
                  value={password}
                  onChange={handlePasswordChange}
          />
        </div>
    </div>
    <Button text="REGISTER"
              onClick={handleClick}
      />
  </div>
  )
}

export default Register;