import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./Data/Accounts/account"

export const account = configureStore({
    reducer:AccountReducer
})