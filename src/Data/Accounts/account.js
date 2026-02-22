import { createSlice } from "@reduxjs/toolkit";
import { IsEmailValid } from "../../Libs/InputValidation-Lib/main";

const accountSlice = createSlice({
    name:"account",
    initialState:{},
    reducers:{
        CreateAccount:(state,action) => {
            console.log(state,"eead",action);
            console.log(state,action,IsEmailValid(action.payload.email))
        }
    }
})

export const {CreateAccount} = accountSlice.actions;
export default accountSlice.reducer;