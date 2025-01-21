import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import Build from "./components/Build";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/order" Component={Order} />
        <Route path="/build" Component={Build} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
