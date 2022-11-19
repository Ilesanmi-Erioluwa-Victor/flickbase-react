import { createSlice } from "@reduxjs/toolkit";


let DEFAULT_STATE = {
    loading : false,
    data : {
        _id : null,
        email : null,
        firstname : null,
        lastname : null
    }
}

export const usersSlice = createSlice({
    name : "users",
    initialState : {}
})