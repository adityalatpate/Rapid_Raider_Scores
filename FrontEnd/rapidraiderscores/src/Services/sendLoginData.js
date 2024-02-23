import { myAxios } from "./connection";

export const sendLoginData = (loginData)=>{
    return myAxios.post('/userregistercontroller/mobileotp', loginData)
    .then((response)=> response.data)
    .catch(error => {
        console.error('Error Posting Tournaments Data:', error);
        throw error; 
    });
}