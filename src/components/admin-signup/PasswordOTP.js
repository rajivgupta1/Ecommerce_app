import React from 'react'
import { CustomInput } from '../custom-input/CustomInput'
import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'

const PasswordOTP = () => {
  const emailRef = useRef("")

  const handleOTPRequest = () =>{
    const value = emailRef.current;
    console.log(emailRef.current);
  };

  return (
<>
 <Form>

    <h3>Request OTP</h3>

    <hr />


    <CustomInput ref='emailRef' label="email" placeholder="rk@gmaill.com" />
    <div className='d-grid mt-3'>
        <Button variant='dark' 
          onClick={handleOTPRequest}>
        Request OTP </Button>


    </div>
    </Form>

</>
    )
}

export default PasswordOTP