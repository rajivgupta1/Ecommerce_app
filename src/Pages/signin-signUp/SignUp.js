import React from "react";
import { Header } from "../../components/Layout/Header";
import { AdminSignup } from "../../components/admin-signup/AdminSignup";

const SignUp = () => {
  return (
    <div>
      <Header />
      <mian className="main">
        <AdminSignup />
      </mian>
    </div>
  );
};

export default SignUp;
