export function EmailValidate(email)
{
    let Wrongs = [
        {
            id:1,error:"haven't username",
        }, 
        {
            id:2,error:"haven't symbol",
        },
        {
            id:3,error:"haven't mail server"
        },
        {
            id:4,error:"haven't domain"
        },
        {
            id:5,run:false
        }
    ]
    const splitData = email.split("");
    splitData.map((e,i) => {
        if(i === 0 && e !== "" && e !== "@")
        {
            Wrongs[0].error = ""
        }
        if(i > 0 && e === "@" && Wrongs[0].error === "")
        {
            Wrongs[1].error = ""
        }
        if(i > 0 && Wrongs[1].error === ""){
            let haveSymbolBeforeMailServer = false;
            splitData.map((element,item) =>{
                if(element === "@" && item < i) 
                {
                    haveSymbolBeforeMailServer = true;
                }
            })
            if(haveSymbolBeforeMailServer)
            {
                Wrongs[2].error = ""
            }
        }
        if(i > 0 && e !== "" && Wrongs[2].error === "")
        {
            let Rules = {
                haveSymbolBeforeIt:false,
                haveMailServerBeforeIt:false,
                haveDotBeforeIt:false,
                haveDomainAfterDot:false,
            }
            // Locations uses to make sure about the location of parts of email are true
            let Locations = {
                Symbol:0,
                MailServer:0,
                Dot:0
            }

            splitData.map((element,item) => {
                if(element === "@" && item < i) 
                {
                    Rules.haveSymbolBeforeIt = true;
                    Locations.Symbol = item; 
                }
                if(element !== "" && item < i && item > Locations.Symbol){
                    Rules.haveMailServerBeforeIt = true;
                    Locations.MailServer = item;
                }
                if(element === "." && item > Locations.MailServer)
                {
                    Rules.haveDotBeforeIt = true;
                    Locations.Dot = item;
                }
                if(element !== "" && item > Locations.Dot)
                {
                    Rules.haveDomainAfterDot = true;
                }
                console.log(element,item)
            })
            console.log(Rules,Locations)
            if(
                Rules.haveSymbolBeforeIt
                && Rules.haveMailServerBeforeIt  
                && Rules.haveDotBeforeIt 
                && Rules.haveDomainAfterDot
            )
            {
                Wrongs[3].error = "";
                Wrongs[4].run = true;
            }
        }
    })   
    console.log(Wrongs)
}

