import { useState } from "react"
import { keyRegister } from "../utils/apiClient";

export function useRegister(onSuccess?: () => void){
    const [captcha_value,setCaptchaValue] = useState('');
    const [compare_captcha_value, setCompareCaptchaValue,] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');

    const handleRegister = async(e:React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        setLoading(true);

        try{
            if(!captcha_value){
                alert('Please Complete the Captcha.');
                setErrorMsg('Please Complete the Captcha.');
                setLoading(false);
                return;
            }
            if(compare_captcha_value !== captcha_value){
                alert('Incorrect Captcha, please try once again.');
                console.log(`Incorrect Captcha, please try once again. ${compare_captcha_value} is different of ${captcha_value}`);
            }
            const registration = await keyRegister(captcha_value);
            console.log(registration);
            if(registration.success){
                onSuccess?.() 
            }else{ 
                setErrorMsg(`Incorrect Captcha value, invalid. Try again or Contact support. `); 
            }
        }catch(error:any){setErrorMsg(error?.message || 'Error during the Captcha validation. Try again or Contact API support. ')} finally{ setLoading(false); }
    }

    return {captcha_value,setCaptchaValue,compare_captcha_value,setCompareCaptchaValue,loading,setLoading,errorMsg,setErrorMsg,handleRegister,};

}