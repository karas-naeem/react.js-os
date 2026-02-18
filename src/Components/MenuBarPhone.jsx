import { LightMode,DarkMode,Menu } from "@mui/icons-material";
import { Link,Stack, MenuItem,FormControl,InputLabel,Select } from "@mui/material";
import { useContext, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { LightDarkModeContext } from "../Context/LightDarkMode/LightDarkMode";
import { Langs } from "../Context/Langs/Langs";
import { useTranslation } from "react-i18next";
export default function MenuBarPhone()
{
    // eslint-disable-next-line no-unused-vars
    const [t,i18n] = useTranslation();

    const [ShowTheMenuElement,SetShowTheMenuElement] = useState(false);

    const {DarkOrLight,SetDarkOrLight,} = useContext(LightDarkModeContext);

    const {SetLang,LangName,} = useContext(Langs)
    return (
        <Stack flexDirection="column">
                    <Stack color={{color:DarkOrLight ? "#FFF" : "#000",}} height="7vh">
                    <Menu onClick={() => {
                        SetShowTheMenuElement(!ShowTheMenuElement)
                    }}/>
                    <Stack style={{
                        width:"50vw"
                    }}>
                     <FormControl fullWidth size="small"  sx={{
                                width:"40vw",
                                background:"#fff",
                                border:"#555 1 solid",
                                borderRadius:"5px"                               
                            }} color="default">    
                            <InputLabel id="language" >
                                {localStorage.getItem("lang") ? LangName : "language"}
                            </InputLabel>
                            <Select 
                                labelId="language"
                                id="language-select"
                                label="language"
                                sx={{
                                    "::placeholder":{
                                        color:"red"
                                    }
                                }}
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
                    </Stack>
                    {
                        ShowTheMenuElement ? <Stack sx={{
                            padding:"10px",
                            flexDirection:"column",
                            gap:"10px",
                            background:DarkOrLight ? "#0b67ab" : "#FFF",
                            width:"fit-content",
                            height:"20vh",
                        }}>
                            <Stack sx={{
                                width:"100vw",
                            }}>
                                <Link underline="none" component={ReactRouterLink} to="/" sx={{
                                    width:"100%",
                                    color:DarkOrLight ? "#FFF" : "#000",
                                    ":hover":{
                                        background:DarkOrLight ? "#0b67ab" : "#EEE",
                                        color:DarkOrLight ? "#EEE" : "#AA2626 !important"
                                    },
                                }}>
                                    {t("home")}
                                </Link>
                            </Stack>
                            <Stack sx={{
                                width:"100%"
                            }}>
                                <Link underline="none" component={ReactRouterLink} to="/signup" sx={{
                                    width:"100%",
                                    color:DarkOrLight ? "#FFF" : "#000",
                                    ":hover":{
                                        background:DarkOrLight ? "#0b67ab" : "#EEE",
                                        color:DarkOrLight ? "#EEE" : "#AA2626 !important"
                                    },
                                }}>
                                    {t("sign up")}
                                </Link>
                            </Stack>
                            <Stack sx={{
                                width:"100%",
                                }}>
                                <Link underline="none" component={ReactRouterLink} to="/login" sx={{
                                    width:"100%",
                                    color:DarkOrLight ? "#FFF !important" : "#000 !important",
                                    ":hover":{
                                        background:DarkOrLight ? "#0b67ab" : "#EEE",
                                        color:DarkOrLight ? "#EEE" : "#AA2626 !important"
                                    },
                                }}>
                                    {t("log in")}
                                </Link>
                            </Stack>
                        </Stack>: <></>
                    }
                </Stack>
    );
}