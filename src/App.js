import LandingPage from "./pages/LandingPage";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/signup" exact={true} component={SignUpForm} />
    </Router>
  );
};

// infinite scroll, logout, more customizations...

export default App;
