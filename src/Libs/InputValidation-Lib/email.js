import { t } from "i18next";

export function EmailValidateOutput(email)
{
    let wrongs = [];
    const status = {
        type:"status/email",
        status:false,
    };

    const EmailRegax = /^\w{2,}@\w{2,}\.\w{2,}$/;
    // that new if condition
    if(!/^\w{2,}/.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:t("haven't username"),
            }
        })
    }
    // that new if condition
    if(!/^\w{2,}@/.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:t("haven't symbol"),
            }
        })
    }
    // that new if condition
    if(!/^\w{2,}@\w{2,}/.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:t("haven't server mail"),
            }
        })
    }
    // that new if condition
    if(!EmailRegax.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:t("haven't domain or haven't correct domain"),
            }
        })
    }
    else{
        status.status = true;
    }
    
    return {
        wrongs,
        status
    }
}

