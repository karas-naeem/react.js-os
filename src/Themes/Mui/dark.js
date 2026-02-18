import { createTheme } from "@mui/material";
export const DarkTheme = createTheme({
    components:{
        MuiAppBar:{    
            defaultProps:{
                sx:{
                    width:"100vw",
                    height:"8.5vh",
                    padding:"1vh",
                    background:"#0b67ab",
                },
            }, 
        },
        MuiLink:{
            defaultProps:{
                sx:{
                    color:"#fff",
                    ":hover":{
                        color:"#EEE"
                    },
                },
            },
        },
        MuiStack:{
            defaultProps:{
                width:"100%",
                height:"100%",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",

            },
        },
    
    }
})