import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha({SetRecaptchaToken})
{
    const siteKey = '6LfwVXYsAAAAAIEILloQ8IZ0GeCNvkDTOMfFOC4Y';
    
    return <ReCAPTCHA sitekey={siteKey} onChange={token => {
        SetRecaptchaToken(token);
    }}/>    
}