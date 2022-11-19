import axios from "axios"
import {createAsyncThunk } from "@reduxjs/toolkit"

// thunk for registering Users
export const registerUser = createAsyncThunk(
    "users/registerUser",
    async ({email, password}, {dispatch})=> {
     try {
        
        const response = await axios.post(`/api/auth/register`,{
            email : email,
            password : password
        });

       return {data :response.user, auth : true}
     } catch (error) {
        throw error
     }
    }
)