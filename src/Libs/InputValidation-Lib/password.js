import { t } from "i18next";

export function PasswordValidateOutput(passsword)
{
    let wrongs = [];
    const status = {
        type:"status/password",
        status:false,
    };

    const passswordRegax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*()-=_+])[a-zA-Z\d!@#$%^&*()-=_+]{8,}$/;
    // that new if condition
    if(!/[a-z]/.test(passsword))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/password",
                error:t("haven't smallcase letter")      
            }
        });
    }
    // that new if condition
    if(!/[A-Z]/.test(passsword))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/password",
                error:t("haven't uppercase letter")      
            }
        });
    }
    // that new if condition
    if(!/[\d]/.test(passsword))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/password",
                error:t("haven't number")      
            }
        });
    }
    // that new if condition
    if(!/[!@#$%^&*()_+=-]/.test(passsword))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/password",
                error:t("haven't special charcter")      
            }
        });
    }
    // that new if condition
    if(!/.{8,}/.test(passsword))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/password",
                error:t("less than 8 charcters")
            }
        });
    }
    if(passswordRegax.test(passsword))
    {
        status.status = true;
    }

    
    return {
        wrongs,
        status
    }
}