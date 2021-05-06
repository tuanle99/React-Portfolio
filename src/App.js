import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Resume} />
      <Route exact path="/" component={Project} />
      <Route exact path="/" component={Contact} />
    </Router>
  );
}

export default App;
