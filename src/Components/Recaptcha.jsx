import ReCAPTCHA from "react-google-recaptcha";
import '../Style/Recaptcha.css'

export default function Recaptcha({SetRecaptchaToken})
{
    const siteKey = '6LfwVXYsAAAAAIEILloQ8IZ0GeCNvkDTOMfFOC4Y';
    
    return <ReCAPTCHA className="recaptcha"  sitekey={siteKey} onChange={token => {
        SetRecaptchaToken(token);
    }}/>    
}