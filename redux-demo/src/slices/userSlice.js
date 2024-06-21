import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:"Ashlin"
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        changeName:(state,action)=>{

        }
    }
})

export const {changeName} = userSlice.actions
export default userSlice.reducer