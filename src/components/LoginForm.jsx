import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../src/App.css";

const projectID = "963412d5-7733-4486-a58f-114187c72fe0";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username | password => chatEngine -> give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // works out -> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      // error -> try with new username...
      setError(
        "You have entered incorrect login information. Please try again..."
      );
    }
  };

  //   const onSignUpClicked = () => {
  //     this.props.history.push("/events");
  //   };

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
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <div align="center">
              <button
                type="button"
                className="button"
                // onClick={onSignUpClicked}
              >
                <span>Sign Up</span>
              </button>
            </div>
          </Link>
        </form>
        <h2 className="login_error_message">{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;
