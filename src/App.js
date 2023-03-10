import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route expath path = '/' element={<HomeScreen/>} />
          <Route expath path = '/login' element={<Login/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
