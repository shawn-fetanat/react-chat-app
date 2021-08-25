import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "../components/ChatFeed";
import LoginForm from "../components/LoginForm";
import "../../src/App.css";

const projectID = "963412d5-7733-4486-a58f-114187c72fe0";

const LandingPage = () => {
  //if there is no username (not logged in) in local storage then return LoginForm
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
};

export default LandingPage;
