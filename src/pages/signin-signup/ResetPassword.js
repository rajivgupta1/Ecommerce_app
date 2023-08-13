import React, { useState } from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import PasswordOTP from '../../components/admin-signup/PasswordOTP';
import PasswordReset from '../../components/admin-signup/PasswordReset';

const ResetPassword = () => {

  const [form, setForm] = useState("otp");

  const forms ={
    otp: <PasswordOTP />,
    reset: <PasswordReset />,

  };


  return (
    <>

 <Header />
   <main className='main pt-5'>
   <div className='d-flex reset-pass'>
    {forms[form]}
   </div>

   </main>
 <Footer />

    </>
  );
};

export default ResetPassword