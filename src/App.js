import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreateChar from "./pages/CreateChar";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/createChar"> Create Character </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createChar" element={<CreateChar />} />
      </Routes>
    </Router>
  );
}

export default App;
