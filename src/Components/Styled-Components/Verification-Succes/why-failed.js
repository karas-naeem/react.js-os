import { styled } from "@mui/material";
import { t } from "i18next";

export const WhyFailed = styled("p")(({DarkOrLight,HaveData}) => ({
    position:"relative",
    ":hover":{
        "&:after":{
            position:"absolute",
            width:"100%",
            left:"2.25%",
            top:"20px",
            content:`'${
                HaveData ? t("you often open this page two times or change a small thigs in URL") : t("your URL are'nt right")
            }'`,
            color:DarkOrLight ? "#FFF" : "#1f1f1f"
        }
    },
}))