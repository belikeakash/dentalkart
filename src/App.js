import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route expath path = '/home' element={<HomeScreen/>} />
          <Route expath path = '/' element={<Login/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
