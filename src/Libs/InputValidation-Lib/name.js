import { t } from "i18next";

export function NameValidateOutput(name)
{
let wrongs = [];
    const status = {
        type:"status/name",
        status:false,
    };

    const NameRegax = /^[\p{L}]{2,30}$/u;
    if(!NameRegax.test(name))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/name",
                error:t("your name invalid")      
            }
        });
    }
    else{
        status.status = true;
    }
    
    return {
        wrongs,
        status
    }
}