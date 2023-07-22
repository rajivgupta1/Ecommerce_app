import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SignIn from "./Pages/signin-up/SignIn";
import SignUp from "./Pages/signin-up/SignUp";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignIn />} />

        {/* private router */}
        <Route path="/new-admin" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
