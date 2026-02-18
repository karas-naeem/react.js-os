import { Button, InputLabel, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ResponsiveContext } from "../Context/Responsive/ResponsiveContext";
// import { useContext } from "react";


export default function SignUp()
{
    //Languages
    // eslint-disable-next-line 
    const [t,i18n] = useTranslation();
    
    //Dark & Light Mode

    // Responsive
    const {isTablet,isLaptop} = useContext(ResponsiveContext);

    

    return (

        <Stack height="100vh" flexDirection={
            localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "row-reverse" : "row"
        } alignItems="end">
            <div style={{
                // Overflow
                overflowY:"scroll",
                // Size
                width:"60vw",
                height:"92.5vh",
                // Flex
                display:"flex",
                flexDirection:"column",
                gap:"25px",
                // Styles
                background:"#fff",
                boxShadow:"10px 0px 10px #00000088",
                // Positions
                marginLeft:"-10vw",                
                // Radius
                borderTopLeftRadius:localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "0" : "5vw",
                borderTopRightRadius:localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "5vw" : "0",
                // Border
                borderLeft: localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "" : "1px solid #aaa",
                borderRight: localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "1px solid #aaa" : "",
                // Z-Index
                zIndex:"1",
                // Add-ons
                textTransform:"initial !important",
                direction:localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "rtl" : "ltr",
            }}>
                <div style={{
                    marginTop:"5%"
                }}>
                    <InputLabel id="name">{t("name")}:</InputLabel>
                    <TextField placeholder={t("name")} label="name"/>
                </div>
                <div>
                    <InputLabel id="e-mail">{t("e-mail")}:</InputLabel>
                    <TextField placeholder={t("e-mail")} type="email" label="e-mail" onChange={() => {        
                    }}/>
                </div>
                <div>
                    <InputLabel id="password">{t("password")}:</InputLabel>
                    <TextField placeholder={t("password")} type="password" label="password" onChange={() => {        
                    }}/>
                </div>
                <div>
                    <input type="submit" value={t("create a new account")} style={{
                        border:"0 solid #000",
                        padding:"10px",
                        color:"#FFF",
                        borderRadius:"10px",
                        fontSize:"15px",
                        outline:"none",
                        background:"#68a3eb"
                    }}/>
                </div>
                <div style={{
                    borderTop:"1px #AAA solid",
                    padding:"22.5px",
                    display:"flex",
                    flexDirection:"column",
                    gap:"5px",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <Button variant="contained" sx={{
                        background:"#68a3eb",
                        textTransform:"capitalize"
                        ,gap:"5px",
                        width:"30%"
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
                </svg></Button>
                <Button variant="contained" sx={{
                        background:"#68a3eb",
                        textTransform:"capitalize"
                        ,gap:"5px",
                        width:"35%"
                    }}>
                        {t("sign up with microsoft")} 
                        <svg style={{
                            width:"30px"
                        }} viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z">
                    </path>
                </svg></Button>
            </div>
            </div>
            <div style={{
                width:"49.9vw",
                height:"92.5vh",
                display:"flex",
                background:"linear-gradient(to bottom,#fff,#68a3eb)",
                justifyContent:localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "start" : "end"
            }}>
                <div style={{
                    width:"42.5vw",
                }}>
                    <p style={{
                        fontSize:isLaptop ? "35px" : isTablet ? "25px" : "1.25rem",
                        fontWeight:"bold"
                    }}>
                        {t('sign up')}
                    </p>
                </div>
             </div>
        </Stack>
    );
}
