import { t } from "i18next";
import { EmailValidate, NameValidate, PassswordValidate } from "../Libs/InputValidation-Lib/main";


export default function InputWrongs({
    data
}){
        const emailReturn = EmailValidate(data.email);
        const nameReturn = NameValidate(data.name);
        const passwordReturn = PassswordValidate(data.password);
        if(data.writtenOn === "noAnyThing")
        {
        return (
            <>
                    <li style={{
                        width:"fit-content",
                        color:nameReturn.status.status ? "#40916c" : "#d90429",
                        textDecoration:nameReturn.status.status ? "#40916c line-through 1px" : "",
                    }}>
                       {
                            nameReturn.status.status ? <>{t("your name valid")}</> : <>{t("your name invalid")}</>
                       }
                    </li>
                    <li style={{
                        width:"fit-content",
                        color:emailReturn.status.status ? "#40916c" : "#d90429",
                        textDecoration:emailReturn.status.status ? "#40916c line-through 1px" : "",
                    }}>
                        {
                            emailReturn.status.status ? <>{t("your email valid")}</> : <>{t("your email invalid")}</>
                        }
                    </li>
                    <li style={{
                        width:"fit-content",
                        color:passwordReturn.status.status ? "#40916c" : "#d90429",
                        textDecoration:passwordReturn.status.status ? "#40916c line-through 1px" : "",
                    }}>
                        {
                            passwordReturn.status.status ? <>{t("your password valid")}</> : <>{t("your password invalid")}</>
                        }
                    </li>
                </>
            );
        }
        else if(data.writtenOn === "name")
        {
            console.log(nameReturn,emailReturn,passwordReturn)
            const nameWrongsJsx = nameReturn.status.status ? <></> : nameReturn.wrongs.map(e => {
                return (
                    <li key={e.id} style={{
                        color:"#d90429"
                    }}>
                        {e.return.error}
                    </li>
                )
            })
            return <>{nameWrongsJsx}</>;
        }
        else if(data.writtenOn === "email")
        {
            const emailWrongsJsx = emailReturn.status.status ? <></> : emailReturn.wrongs.map(e => {
                return (
                    <li key={e.id} style={{
                        color:"#d90429",
                        fontSize:"0.95rem",
                    }}>
                        {e.return.error}
                    </li>
                )
            })
            return <>{emailWrongsJsx}</>;
        }
        else if(data.writtenOn === "password")
        {
            const passwordWrongsJsx = passwordReturn.status.status ? <></> : passwordReturn.wrongs.map(e => {
                return (
                    <li key={e.id} style={{
                        color:"#d90429"
                    }}>
                        {e.return.error}
                    </li>
                )
            })
            return <>{passwordWrongsJsx}</>;
        }
    };
