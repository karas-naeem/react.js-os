import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name:"account",
    initialState:{},
    reducers:{
        CreateAccount:(state,action) => {
        }
    }
})

export const {CreateAccount} = accountSlice.actions;
export default accountSlice.reducer;