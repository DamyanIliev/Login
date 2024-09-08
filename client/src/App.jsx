import { useSelector } from "react-redux";
import {Outlet, Navigate, Route, Routes, useLocation, Router} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"

function App() {

  function URLSwitch(){
    const {account} = useSelector((state)=>state.account)
    const location = useLocation()

    return account.email ? (
      <Outlet/>
    ):(
      <Navigate to ="/login" state={{from: location}} replace/>
    );
  }

  return (
      <Routes>
        <Route element = {URLSwitch}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  )
}

export default App
