/* eslint-disable */
export function EmailValidate(email)
{
    let wrongs = [];
    const status = {
        type:"email/status",
        status:false,
    };

    const EmailRegax = /\w{2,}@\w{2,}\.\w{2,}/;
    // that new if condition
    if(!/\w{2,}/.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:"haven't username",
            }
        })
    }
    // that new if condition
    if(!/\w{2,}@/.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:"haven't symbol",
            }
        })
    }
    // that new if condition
    if(!/\w{2,}@\w{2,}/.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:"haven't server mail",
            }
        })
    }
    // that new if condition
    if(!/\w{2,}@\w{2,}\.\w{2,}/.test(email))
    {
        wrongs.push({
            id:1,
            return:{
                type:"wrong/email",
                error:"haven't domain or haven't correct domain",
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

