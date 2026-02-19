import './App.css';
import {Route, Routes} from "react-router-dom";
import MainBar from './Components/MenuBar';
import SignUp from './Components/SignUp';
import { LightDarkModeContext } from './Context/LightDarkMode/LightDarkMode';
import { Langs } from './Context/Langs/Langs';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { DarkTheme } from './Themes/Mui/dark';
import { LightTheme } from './Themes/Mui/light';
import { useTranslation } from 'react-i18next';
import HomePage from './Components/HomePage';
import { ResponsiveContext } from './Context/Responsive/ResponsiveContext';
import "./Style/Selection.css"


function App() {

  
  // eslint-disable-next-line no-unused-vars
    const [t,i18n] = useTranslation();
    // Dark & Light Modes
    const CheckDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [DarkOrLight,SetDarkOrLight] = useState(() => {
          if(localStorage.getItem("LightDarkMode"))
          {
              return JSON.parse(localStorage.getItem("LightDarkMode"))
          }
          else{
            return CheckDarkMode
          }
        }); // this state storage boolen data dark:true , light:false
        
        localStorage.setItem("LightDarkMode",DarkOrLight);
        const Theme = DarkOrLight ? DarkTheme : LightTheme;
        // Langs
        const [lang,SetLang] = useState(() => {
          if(localStorage.getItem("lang"))
            {
              return localStorage.getItem("lang");
            }
            else {
              return ""
            }
        });
        const LangName = 
          localStorage.getItem("lang") === "en" ? "language" : 
          localStorage.getItem("lang") === "fr" ? "langue" :
          localStorage.getItem("lang") === "de" ? "sprache" :
          localStorage.getItem("lang") === "ar" ? "اللغة" : 
          localStorage.getItem("lang") === "fa" ? "زبان" : 
          localStorage.getItem("lang") === "ru" ? "язык" :
          localStorage.getItem("lang") === "zh-CN" ? "语言" :
          localStorage.getItem("lang") === "zh-TW" ? "語言" :
           "";
        useEffect(() => {
          i18n.changeLanguage(lang);
          localStorage.setItem("lang",lang);
        },[lang,i18n]);
      //Responsive
      const isTablet = useMediaQuery("(min-width:768px)");
      const isLaptop = useMediaQuery("(min-width:1024px)");
  return (

    <LightDarkModeContext.Provider value={{
      Theme,
      DarkOrLight,
      SetDarkOrLight,
    }}>
      <Langs.Provider value={{
        SetLang,
        LangName
      }}>
        <ResponsiveContext.Provider value={{
          isTablet,
          isLaptop
        }}>          
          <div className={
            DarkOrLight ? "App Dark-Selection" : "App Light-Selection"
          }  style={{
            background:DarkOrLight ? "#0f0f0f" : "#fff",
            direction:localStorage.getItem("lang") === "ar" || "fa" ? "rtl" : "ltr"
          }} >
            <MainBar/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/login' element={<>login</>}/>
            </Routes>
           </div>
        </ResponsiveContext.Provider>
      </Langs.Provider>
    </LightDarkModeContext.Provider>
  );
}

export default App;
