import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import { EmailValidate, NameValidate, PassswordValidate } from "../../Libs/InputValidation-Lib/main";
const actionCodeSettings = {
    url:"https://reactjs-os.netlify.app/verification-success",
    handleCodeInApp:true
};

export const SignUpThunkFunction = createAsyncThunk("accounts/signup",async (action,thunkTools) => {
    if(NameValidate(action.name).status.status && EmailValidate(action.email).status.status && PassswordValidate(action.password).status.status )
    {
        const userCredential = await createUserWithEmailAndPassword(
            action.auth,
            action.email,
            action.password,
        )
        const user = userCredential.user;
        await updateProfile(user,{displayName:action.name})
        await sendEmailVerification(user,actionCodeSettings);

        return {
            name:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
            uid:user.uid,
            isHaveAccount:true,
        }
    }
}) 

export const SignUpOrLogInWithProviderThunkFunction = createAsyncThunk("accounts/signup-or-login-with-provider",async (action,thunkTools) => {
    const provider = action.provider;
    provider.setCustomParameters({
        prompt:"select_account"
    })
    const user = await signInWithPopup(action.auth,provider).then((result) => {
        return result.user; 
    }).catch(() => {
        
    })

    await sendEmailVerification(user,actionCodeSettings);
    
    return {
        name:user.displayName,
        email:user.email,
        photoUrl:user.photoURL,
        uid:user.uid,
        isHaveAccount:true,
    }
})


const accountSlice = createSlice({
    name:"account",
    initialState:{
        isHaveAccount:false
    },
    extraReducers:(builder) => {
        builder.addCase(SignUpThunkFunction.pending(() =>{
            console.log("SignUpThunkFunction is pending")
        }))
        builder.addCase(SignUpOrLogInWithProviderThunkFunction.pending(() =>{
            console.log("SignUpThunkFunction is pending")
        }))
    }
})

export default accountSlice.reducer;