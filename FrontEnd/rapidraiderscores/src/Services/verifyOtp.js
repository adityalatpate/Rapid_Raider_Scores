import { myAxios } from "./connection";

export const verifyOtp = (requestData)=>{
    return myAxios.post('/userregistercontroller/otpverify', requestData)
    .then((response)=> response.data)
    .catch(error => {
        console.error('Error Posting Tournaments Data:', error);
        throw error; 
    });
}