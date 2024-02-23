import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { sendLoginData } from '../Services/sendLoginData';
import { verifyOtp } from '../Services/verifyOtp';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [loginInfo, setLoginInfo] = useState({
        phnNumber: '',
        firstName: '',
        lastName: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [showOTPField, setShowOTPField] = useState(false); // State to manage OTP field visibility
    const [otpInfo, setOtpValue] = useState({
        otp: ''
    });

    const handleChange = (e) => {
        // If the input field is for the phone number and the value does not start with '+91', prepend it
        if (e.target.name === 'phnNumber' && !e.target.value.startsWith('+91')) {
            setLoginInfo({ ...loginInfo, [e.target.name]: '+91' + e.target.value });
        } else {
            setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
        }
    };

    const handleOtpChange = (e) => {
        setOtpValue({ ...otpInfo, [e.target.name]: e.target.value });
    }

    const handleVerifyOTP = () => {
        // Implement logic to verify OTP here
        console.log("Verifying OTP:", otpInfo.otp);
        const requestData = {
            ...otpInfo,
            ...loginInfo
        };
        console.log(requestData);

        // Once verified, you can proceed with further actions
        verifyOtp(requestData).then((resp)=>
        {
          console.log("HII" + resp);
          if(resp === "OTP matched. Account Already Exist.")
          {
                window.alert(resp + " Logging in to your Account...");
                navigate('/main', { state: { loginInfo } });
          }
          else
          {
                window.alert(resp + " Registering Your Account...");
                navigate('/main', { state: { loginInfo } });
          }

            if (resp.status === 200) 
            {
                console.log("OTP matched");
            } else if (resp.status === 400) {
                console.log("Invalid OTP");
            }
          
        }).catch(
            (error)=> {
                if (error && error.response && error.response.status === 400) {
                    window.alert("Invalid OTP");
                    setOtpValue({
                        otp: ''
                    });
                }
                else
                {
                    window.alert("Some Error Occured. Please Try again later. After Some time!!");
                    console.log(error)
                    setOtpValue({
                        otp: ''
                    });
                }
            }
          );;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm(loginInfo);
        // Check if there are any errors in the form
        if (Object.keys(formErrors).length === 0) {
            // If there are no errors, proceed with form submission
            sendLoginData(loginInfo).then((resp) => {
                console.log("HII" + resp)
                setShowOTPField(true);
                window.alert("We have sent you an OTP on your phone number.!!");
            }).catch((error) => {
                // Handle error from API call
                setLoginInfo({
                    phnNumber: '',
                    firstName: '',
                    lastName: ''
                });
                window.alert("Some Error Occurred. Please Try again later. After Some time!!");
                console.log(error);
            });
        } else {
            // If there are errors, update the state to display the errors to the user
            setErrors(formErrors);
        }
    };
    

    const handleBlur = (field) => (event) => {
        const fieldValue = event.target.value;
        const formErrors = validateField(field, fieldValue);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: formErrors[field],
        }));
    };

    const validateField = (field, value) => {
        let errors = {};
        switch (field) {
            case 'phnNumber':
                if (!value) {
                    errors.phnNumber = 'Phone number is required';
                } else if (!/^(\+91)?\d{10}$/.test(value)) {
                    errors.phnNumber = 'Invalid phone number';
                }
                break;
            case 'firstName':
                if (!value) {
                    errors.firstName = 'First name is required';
                } else if (value.length < 3 || value.length > 20) {
                    errors.firstName = 'First name must be between 3 and 20 characters';
                }
                break;
            case 'lastName':
                if (!value) {
                    errors.lastName = 'Last name is required';
                } else if (value.length < 3 || value.length > 20) {
                    errors.lastName = 'Last name must be between 3 and 20 characters';
                }
                break;
            default:
                break;
        }
        return errors;
    };

    const validateForm = (formData) => {
        let errors = {};
        if (!formData.phnNumber) {
            errors.phnNumber = 'Phone number is required';
        } else if (!/^\+91\d{10}$/.test(formData.phnNumber)) {
            errors.phnNumber = 'Phone number must be in the format +91XXXXXXXXXX';
        }
        if (!formData.firstName) {
            errors.firstName = 'First name is required';
        } else if (formData.firstName.length < 2 || formData.firstName.length > 20) {
            errors.firstName = 'First name must be between 2 and 20 characters';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last name is required';
        } else if (formData.lastName.length < 2 || formData.lastName.length > 20) {
            errors.lastName = 'Last name must be between 2 and 20 characters';
        }
        return errors;
    };
    

    return (
        <div>
            <h1 style={{ fontFamily: "'Futura', 'Proxima Nova', 'Helvetica', 'Frutiger', sans-serif", textAlign:'center', paddingRight:'95px' }}><b>Rapid Raider Scores</b></h1>
            <div style={{ paddingTop:'6%', paddingLeft:'32%', paddingRight:'20%', width:'30cm' }}>
                <h1 style={{ textAlign:'center', paddingBottom:'20px', fontFamily:'Varela Round' }}>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="phoneNumber">
                        <Form.Label><b>Phone Number:</b></Form.Label>
                        <Form.Control
                            type="tel" // Consider using type="tel" for phone numbers
                            name="phnNumber"
                            value={loginInfo.phnNumber}
                            onChange={handleChange}
                            onBlur={handleBlur('phnNumber')}
                            required
                            isInvalid={!!errors.phnNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phnNumber}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="firstName">
                        <Form.Label><b>First Name:</b></Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={loginInfo.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur('firstName')}
                            required
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="lastName">
                        <Form.Label><b>Last Name:</b></Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={loginInfo.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur('lastName')}
                            required
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />

                {/* Conditional rendering of OTP field and verify button */}
                {/* {showOTPField && (  */}
                    <div>
                        <Form.Group controlId="otp">
                            <Form.Label><b>Enter OTP:</b></Form.Label>
                            <Form.Control
                                type="text"
                                name='otp'
                                value={otpInfo.otp}
                                onChange={handleOtpChange}
                                required
                            />
                        </Form.Group>
                        <br />
                        <Button variant="primary" onClick={handleVerifyOTP}>
                            Verify
                        </Button>
                    </div>
                {/* )} */}
            </div>
        </div>
    );
};

export default LoginComponent;
