import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Doc } from "./pages/Doc";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doc/:id" element={<Doc />} />
      </Routes>
    </Router>
  )
}

export default App;