import { useState } from "react";
import axios from "axios";
import "../../src/App.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    var data = {
      username: username,
      secret: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
      custom_json: { group: "shawnf" },
    };

    var config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "{{09273d53-275a-401c-b27c-ef6da5298fa5}}",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // if in the then block then post was successful go ahead and store
        // username and password in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.location.reload();
        setError("");
      })
      .catch(function (error) {
        console.log(error);
        setError(
          "Something went wrong re-enter your information and try again."
        );
      });
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Shawn's Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
            placeholder="Last Name"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Submit</span>
            </button>
          </div>
        </form>
        <h2 className="signup_error_message">{error}</h2>
      </div>
    </div>
  );
};

export default SignUpForm;
