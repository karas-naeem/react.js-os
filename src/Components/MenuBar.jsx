import {AppBar, FormControl, InputLabel, Link, MenuItem, Select, Stack, ThemeProvider, useMediaQuery} from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {DarkMode, LightMode} from "@mui/icons-material"
import {  useContext, } from "react";
import MenuBarPhone from "./MenuBarPhone";
import { LightDarkModeContext } from "../Context/LightDarkMode/LightDarkMode";
import { Langs } from "../Context/Langs/Langs";
export default function MenuBar()
{
    
    /* Langs */

    // eslint-disable-next-line no-unused-vars
    const [t,i18n] = useTranslation();
    const {SetLang,LangName} = useContext(Langs)

    // Responsive
    const isTablet = useMediaQuery("(min-width:768px)");
    
    // Dark & Light Mode
    const {DarkOrLight,SetDarkOrLight,Theme} = useContext(LightDarkModeContext);
    return (
        <ThemeProvider theme={Theme}>
            <AppBar color="default" > 
                {
                    isTablet ? 
                    <Stack flexDirection={localStorage.getItem("lang") === "ar" || localStorage.getItem("lang") === "fa" ? "row" : "row-reverse"}>    
                    <Link underline="none" component={ReactRouterLink} to="/">
                       {t("home")}
                    </Link>
                    <Stack sx={{
                        width:"15vw"
                    }}>
                        <FormControl fullWidth size="small"  sx={{
                                width:"10vw",
                                background:"#fff",
                                borderRadius:"5px"                               
                            }} color="default">    
                            <InputLabel id="language" >
                                {localStorage.getItem("lang") ? LangName : "language"}
                            </InputLabel>
                            <Select 
                                labelId="language"
                                id="language-select"
                                label="language"
                                onChange={e => {
                                    SetLang(e.target.value)
                                }}
                            >
                                <MenuItem value="en">english</MenuItem>
                                <MenuItem value="fr">française</MenuItem>
                                <MenuItem value="de">deutsch</MenuItem>
                                <MenuItem value="ar">العربية </MenuItem>
                                <MenuItem value="fa">فارسي</MenuItem>
                                <MenuItem value="ru">русский</MenuItem>
                                <MenuItem value="zh-CN">简体中文</MenuItem>
                                <MenuItem value="zh-TW">繁體中文</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            DarkOrLight ? <LightMode sx={{
                                color:"#FFF",
                            }} onClick={() =>{
                                SetDarkOrLight(false)
                                localStorage.setItem("LightDarkMode",JSON.stringify(false))
                            }}/> : <DarkMode onClick={() =>{
                                SetDarkOrLight(true);
                                localStorage.setItem("LightDarkMode",JSON.stringify(true));
                            }}/>
                        }
                    </Stack>
                    <Stack sx={{
                        width:"fit-content",
                        border:DarkOrLight ? "1px #FFF solid" : "1px #000 solid",
                        color:DarkOrLight ? "#FFF" : "#000",
                        padding:"2px",
                        borderRadius:"5px",
                        justifyContent:"space-evenly",
                        gap:"5px",
                    }}>
                            <Link underline="none" component={ReactRouterLink} to="/signup">
                                {t("sign up")}
                            </Link>
                            | 
                             <Link underline="none" component={ReactRouterLink} to="/login">
                                {t("log in")}
                            </Link>
                    </Stack>
                </Stack> : <MenuBarPhone/>
                }
            </AppBar>    
        </ThemeProvider>
    );
}