import {  InputLabel, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LightDarkModeContext } from "../Context/LightDarkMode/LightDarkMode";
import '../Style/Scroll.css';

export default function SignUpPhone()
{
    //Languages
    // eslint-disable-next-line 
    const [t,i18n] = useTranslation();
    
    //Dark & Light Mode

    const {DarkOrLight} = useContext(LightDarkModeContext);


        return (

            <>
               <Stack flexDirection="column" alignItems="center" color={DarkOrLight ? "#fff" : "#000"}  sx={{
                width:"70%",
                    height:"70vh",
                    background:DarkOrLight ? "linear-gradient(180deg,#0f0f0f 30%,#8a2be2 100%)" : "linear-gradient(to bottom,#fff,#68a3eb)",
                    border:DarkOrLight ?"#FFF 1px solid" : "#000 1px solid",
                    borderRadius:"25px"
                }}>
                    <div style={{
                        margin:"10%",
                        fontSize:"175%",
                    }}>
                        {
                            t("sign up with react.js os")
                        }
                    </div>
                    <div style={{
                        width:"90%",
                        background:DarkOrLight ? "#0f0f0f" : "#fff"
                    }}>
                        
                        <div>
                            <InputLabel id="name" sx={{
                                color:DarkOrLight ? "#FFF" : "#666",
                            }}>{t("name")}:</InputLabel>
                            <TextField sx={{
                                width:"80%",
                                background:DarkOrLight ?  "#8a2be2" : "#68a3eb",
                                borderRadius:"5px",
                            }}  color={DarkOrLight ? "secondary" : "primary" } placeholder={t("name")} label="name"/>
                        </div>
                         <div>
                            <InputLabel id="e-mail" sx={{
                                    color:DarkOrLight ? "#FFF" : "#666"
                                }}>{t("e-mail")}:</InputLabel>
                                <TextField sx={{
                                        width:"80%",
                                        background:DarkOrLight ?  "#8a2be2" : "#68a3eb",
                                        borderRadius:"5px",
                                    }}  color={DarkOrLight ? "secondary" : "primary" } placeholder={t("e-mail")} type="email" label="e-mail" onChange={() => {        
                                }}/>
                            </div>
                            <div>
                                <InputLabel id="password" sx={{
                                    color:DarkOrLight ? "#FFF" : "#666"
                                }}>{t("password")}:</InputLabel>
                                <TextField sx={{
                                    width:"80%",
                                    background:DarkOrLight ?  "#8a2be2" : "#68a3eb",
                                    borderRadius:"5px",
                                  }} color={DarkOrLight ? "secondary" : "primary" } placeholder={t("password")} type="password" label="password" onChange={() => {        
                                }}/>
                            </div>
                        <div>
                    </div>
                </div>
            </Stack>
        </>
    );
}
