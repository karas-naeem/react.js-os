import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name:"account",
    initialState:{},
    reducers:{
    }
})

export const {Print} = accountSlice.actions;
export default accountSlice.reducer;