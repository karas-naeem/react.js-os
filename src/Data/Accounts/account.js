import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { EmailValidate, NameValidate, PassswordValidate } from "../../Libs/InputValidation-Lib/main";

export const SignUpThunkFunction = createAsyncThunk("accounts/signup",async (action,thunkTools) => {
    console.log(action)
    if(NameValidate(action.name).status.status && EmailValidate(action.email).status.status && PassswordValidate(action.password).status.status )
    {
        const userCredential = await createUserWithEmailAndPassword(
            action.auth,
            action.email,
            action.password,
        )
        const user = userCredential.user;
        await updateProfile(user,{displayName:action.name})
        await sendEmailVerification(user)
    }
}) 
const accountSlice = createSlice({
    name:"account",
    initialState:{},
    reducers:{
        CreateAccount:(state,action) => {
            
        }
    },
})

export const {CreateAccount} = accountSlice.actions;
export default accountSlice.reducer;