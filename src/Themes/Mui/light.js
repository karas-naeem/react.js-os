import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    components:{
        MuiAppBar:{    
            defaultProps:{
                sx:{
                    width:"100vw",
                    height:"8.5vh",
                    padding:"1vh",
                    background:"#FFF"
                },
            }, 
        },
        MuiLink:{
            defaultProps:{
                sx:{
                    color:"#000",
                    ":hover":{
                        color:"#AA2626"
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