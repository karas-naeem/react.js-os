import {  Button,InputLabel, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { LightDarkModeContext } from "../Context/LightDarkMode/LightDarkMode";
import '../Style/Scroll.css';
import { useDispatch } from "react-redux";
import { CreateAccount } from "../Data/Accounts/account";
import { auth } from "../firebase";
import Recaptcha from "./Recaptcha";

export default function SignUpPhone()
{
    // Recaptcha
    const [RecaptchaToken,SetRecaptchaToken] = useState(null)
    // Languages
    // eslint-disable-next-line 
    const [t,i18n] = useTranslation();

    // Dark & Light Mode

    const {DarkOrLight} = useContext(LightDarkModeContext);

    // Create A Account

    const [AccountData,SetAccountData] = useState({
        name:"",
        email:"",
        password:""
    });
    const dispatch = useDispatch();
        return (

            <>
               <Stack flexDirection="column" alignItems="center" color={DarkOrLight ? "#fff" : "#000"}  sx={{
                width:"70%",
                    height:"65vh",
                    background:DarkOrLight ? "linear-gradient(180deg,#0f0f0f 30%,#8a2be2 100%)" : "linear-gradient(to bottom,#fff,#68a3eb)",
                    border:DarkOrLight ?"rgb(255, 255, 255) 1px solid" : "#000 1px solid",
                    borderRadius:"25px",
                    overflowY:"auto",
                    overflowX:"hidden"
                }}>
                    <div style={{
                        margin:"10%",
                        fontSize:"140%",
                    }}>
                        {
                            t("sign up with react.js os")
                        }
                    </div>
                    <div style={{
                        width:"90%",
                        height:"100vh",
                        borderRadius:"5px",
                        background:DarkOrLight ? "#0f0f0f" : "#fff",
                    }}>
                        
                        <div>
                            <InputLabel id="name" sx={{
                                color:DarkOrLight ? "#FFF" : "#666",
                            }}>{t("name")}:</InputLabel>
                            <TextField sx={{
                                width:"80%",
                                background:DarkOrLight ?  "#8a2be2" : "#68a3eb",
                                borderRadius:"5px",
                            }}  
                            color={DarkOrLight ? "secondary" : "primary" } 
                            placeholder={t("name")} 
                            label="name"
                            value={AccountData.name}
                            onChange={
                                e => {
                                    SetAccountData({...AccountData,name:e.target.value})
                                }
                            }
                            />
                        </div>
                         <div>
                            <InputLabel id="e-mail" sx={{
                                    color:DarkOrLight ? "#FFF" : "#666"
                                }}>{t("e-mail")}:</InputLabel>
                                <TextField sx={{
                                        width:"80%",
                                        background:DarkOrLight ?  "#8a2be2" : "#68a3eb",
                                        borderRadius:"5px",
                                    }}  color={DarkOrLight ? "secondary" : "primary" }
                                     placeholder={t("e-mail")} 
                                     type="email" 
                                     label="e-mail" 
                                     value={AccountData.email}
                                     onChange={
                                     e => {
                                        SetAccountData({...AccountData,email:e.target.value})
                                     }
                                }/>
                            </div>
                            <div>
                                <InputLabel id="password" sx={{
                                    color:DarkOrLight ? "#FFF" : "#666"
                                }}>{t("password")}:</InputLabel>
                                <TextField sx={{
                                    width:"80%",
                                    background:DarkOrLight ?  "#8a2be2" : "#68a3eb",
                                    borderRadius:"5px",
                                  }} 
                                  color={DarkOrLight ? "secondary" : "primary" } 
                                  placeholder={t("password")} type="password" 
                                  label="password"                             
                                  value={AccountData.password}
                                  onChange={
                                      e => {
                                        SetAccountData({...AccountData,password:e.target.value})
                                  }
                            }/>
                            </div>
                            <div style={{
                                padding:"5%"
                            }}>
                                {
                                    RecaptchaToken ? <input type="submit" value={t("create a new account")} style={{
                                    border:"0 solid #000",
                                    padding:"10px",
                                    color:"#FFF",
                                    borderRadius:"10px",
                                    fontSize:"0.6rem",
                                    outline:"none",
                                    background:DarkOrLight ? "#8a2be2" : "#68a3eb"
                                }} onClick={() => {
                                    dispatch(CreateAccount({
                                        auth,
                                        name:AccountData.name,
                                        email:AccountData.email,
                                        password:AccountData.password
                                    }))
                                }}/> : <div style={{
                                            width:"100%",
                                            display:"flex",
                                            justifyContent:"center"
                                    }}><Recaptcha SetRecaptchaToken={SetRecaptchaToken}/>
                                    </div> 
                                                    
                                }
                            </div>
                            <div style={{
                                borderTop:DarkOrLight ?  "1px #000 solid" : "1px #AAA solid",
                                padding:"22.5px",
                                display:"flex",
                                flexDirection:"column",
                                gap:"5px",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Button variant="contained" sx={{
                                    background:DarkOrLight ? "#8a2be2" : "#68a3eb",
                                    textTransform:"capitalize"
                                    ,gap:"5px",
                                    width:"50vw",
                                    fontSize:"0.5rem"
                                }}>
                                    {t("sign up with google")} 
                                    <svg style={{
                                        width:"30px"
                                    }} viewBox="0 0 48 48">
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                        <path fill="none" d="M0 0h48v48H0z">
                                        </path>
                                    </svg>
                                </Button>
                                <Button variant="contained" sx={{
                                    background:DarkOrLight ? "#8a2be2" : "#68a3eb",
                                    textTransform:"capitalize"
                                    ,gap:"5px",
                                    width:"50vw",
                                    fontSize:"0.5rem"
                                    }}>
                                        {t("sign up with github")} 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{
                                                width:"40px"
                                            }}>
                                                {/*Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.*/}
                                            <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/>
                                        </svg>
                                </Button>
                            </div>
                        <div>
                    </div>
                </div>
            </Stack>
        </>
    );
}
