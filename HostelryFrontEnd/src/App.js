import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import Hostel from "./hostel/Hostel";
import List from "./list/List";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/hostel/:id" element={<Hostel />}></Route>
        <Route path="/lists" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
