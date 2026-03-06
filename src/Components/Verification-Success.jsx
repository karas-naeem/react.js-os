import {Button, Container, Stack} from "@mui/material";
import { applyActionCode, getAuth } from "firebase/auth";
import React, { lazy, useContext, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ResponsiveContext } from "../Context/Responsive/ResponsiveContext";
import { GppBad, InfoOutline } from "@mui/icons-material";
import "../Style/Verification-success.css";
import { LightDarkModeContext } from "../Context/LightDarkMode/LightDarkMode";
import { t } from "i18next";
import { WhyFailed } from "./Styled-Components/Verification-Succes/why-failed";
const Loading = lazy(() => import("./Loading"));


/* eslint-disable */

export default function VerificationSuccess()
{
    // components
    const SuccessVerification = () => {
        return <React.Suspense fallback={<Loading/>}>
        <VerifiedUserIcon sx={{
                width:"100%",
                height:"40%"
            }}/>
                    
                {t("verification success")}
            <Button variant="contained" style={{
                textTransform:"capitalize",maxWidth:"90%",
                background:DarkOrLight ? "blueviolet" : "#68a3eb",
                alignSelf:"start"
            }}>
                <Link style={{
                    textDecoration:"none",
                    color:"#FFF"
                }} to={"/"}>
                    {t("back to home")}
                </Link>
            </Button>   
        </React.Suspense>;
    }

    const FailedVerification = ({HaveData}) => {
        return <React.Fragment>
                <GppBad sx={{
                    width:"100%",
                    height:"50%"
                }}/>
                {t("verification failed")}
                <Stack direction={localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "row-reverse" : "row"} justifyContent="space-around" alignItems="center" style={{
                    width:"100%",
                    gap:"2px",
                    fontSize:"10px"
                }}>
                    <Button variant="contained" style={{
                        textTransform:"capitalize",maxWidth:"85%",
                        color:"#FFF",
                        background:DarkOrLight ?  "#8a2be2" : "#68a3eb",
                        alignSelf:"end"
                    }}>
                        <Link style={{
                            textDecoration:"none",
                            color:"#FFF"
                        }} to={"/"}>
                            {t("back to home")}
                        </Link>
                        </Button>  
                        <div>
                            <WhyFailed DarkOrLight={DarkOrLight} HaveData={HaveData}>
                                {t("why failed?")} 
                                <InfoOutline sx={{
                                widows:"10px",
                                height:"10px"
                            }}/></WhyFailed>

                        </div>
                </Stack>
        </React.Fragment>;
    }
    // Refs
    const doUseEffect = useRef({
        do:true,
        lang:localStorage.getItem("lang"),
        mode:JSON.parse(localStorage.getItem("LightDarkMode"))
    });
    /*
     lang property used because if the user change language 
     the lang propery will compare by the newest lang user use it 
     and if lang property aren't equal by the newest lang user use it 
     that mean run useEffect hook function
    */

    /*
     mode means dark or light and it's like lang property idea .
     it's to check mode to allow or disable run use effect 
    */

    // Responsive
    const  {isLaptop,isTablet} = useContext(ResponsiveContext);
    const [searchParams] = useSearchParams()
    
    // Dark or Light
    const {DarkOrLight} = useContext(LightDarkModeContext);

    // Params
    const mode = searchParams.get("mode");
    const oobCode = searchParams.get("oobCode")

    // State
    const [massage,setMassage] = useState()
    // Side-Effects
    useEffect(() => {
        // Startup Conditions
        const LangsCondition = doUseEffect.current.lang === localStorage.getItem("lang") && !doUseEffect.current.do;
        const ModeCondition = doUseEffect.current.mode === localStorage.getItem("LightDarkMode") && !doUseEffect.current.do;
        if(!LangsCondition || !ModeCondition ) '';
        else return;
        // Edit doUseEffect to make data editable by user changing
        doUseEffect.current.lang = localStorage.getItem("lang");
        doUseEffect.current.mode = JSON.parse(localStorage.getItem("LightDarkMode"));
        /*
            line 115 it idea is for example your lang for example en 
            and you change it for example to ar that work if you change it to en the language
            still ar why because the doUseEffect.current.lang still en and not change and it 
            compared in line 107 by lang user change to it and if the 
            doUseEffect.current.lang = lang user use it go outside useEffect (return;,line:113)
        */
       /*
            line 116 it idea the same idea of line 115 but the change is that's change mode 
       */
        let auth = getAuth();
        if(mode === "verifyEmail" && oobCode){
            applyActionCode(auth,oobCode).then(() => {
                doUseEffect.current.do = false;
                setMassage(
                    <SuccessVerification/>
               )
            }).catch(() => {
                doUseEffect.current.do ? setMassage(
                    <FailedVerification HaveData={true}/>
                ) : setMassage(<SuccessVerification/>)
                /* this check that idea is if user change language that make re-render 
                so the firebase will make verification second time so the verification 
                ever the URL and auth true that's be false so this check mean if doUseEffect false 
                that mean the verification success because at first render if data right and 
                it's the first times user open url the firebase do the promise then and 
                when the promise then that do doUseEffect false (you will show it at ln 106,col 13 )
                */
            })
        }
        else{
            setMassage(
                <FailedVerification HaveData={false}/>
            );
        }
    },[doUseEffect,localStorage.getItem("lang"),localStorage.getItem("LightDarkMode")]); 
    useEffect(() => {
        return () => document.title = doUseEffect.current.do ? "react.js os - " + t("verification failed") : "react.js os - " + t("verification success");
    },[doUseEffect,localStorage.getItem("lang")]);
    return <>
        <Container style={{
            direction:localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "rtl" : "ltr",
            width:isLaptop ? "30vw" : isTablet ? "45vw" : "77.5vw",
            height:isLaptop  ? "40vh" : isTablet ? "45vh" : "55vh",
            padding:"20px",
            background:DarkOrLight ? "blueviolet" : "#68a3eb",
            borderRadius:"18px",
            color:"#FFF",
            display:"flex",
            flexDirection:"column",
            gap:"10%",
            textAlign:"center"
        }}>
            {massage}
         </Container>
    </>;
}