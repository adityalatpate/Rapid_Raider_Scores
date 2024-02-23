import React from 'react';
import { myAxios } from "./connection";

 function LoginOtp() {
  
    return myAxios.post('/userregistercontroller/mobileotp')
}

export default LoginOtp;