import React, { lazy, useContext, useEffect } from "react";
import { lineAnimate } from "../Animations/HomePage";
import { LightDarkModeContext } from "../Contexts/LightDarkMode/LightDarkMode";
const Loading = lazy(() => import("./Loading"));

export default function HomePage()
{

    const {DarkOrLight} = useContext(LightDarkModeContext)

    useEffect(() =>{
        return () => {
            lineAnimate()
        }
    },[])
    return (
        <React.Suspense fallback={<Loading/>}>
            <img src="react os logo 265.png" alt="react.js os logo" loading="lazy" width="150"/>
                <div id="line1" style={{
                    background:DarkOrLight ? "#FFF" : "#000",
                    height:"2px",
                    rotate:"360deg",
                }}></div>
        </React.Suspense>
    );
}