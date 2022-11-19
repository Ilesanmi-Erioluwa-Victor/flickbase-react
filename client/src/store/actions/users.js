import axios from "axios"
import {createAsyncThunk } from "@reduxjs/toolkit"

// thunk for registering Users
export const registerUser = createAsyncThunk(
    "users/registerUser",
    async ({email, password}, {dispatch})=> {

    }
)