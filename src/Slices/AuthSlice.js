import { AxiosInstance } from "@/Axios/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData : {},
    loading : false,
    error : null,
    userResumes : []
}

const LoginUser = createAsyncThunk("user/login",async (data,{rejectWithValue})=>{
    try {
        if(data){
            console.log(data)
           const LoginResponse = await AxiosInstance.post("/users/login",data)
           if(LoginResponse){
            console.log(LoginResponse)
           
            return LoginResponse.data.data
           }
        }
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message)
    }
})

const AuthSlice = createSlice({
    initialState,
    name : "Auth",
    extraReducers:(reducer)=>{
        reducer.addCase(LoginUser.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(LoginUser.fulfilled,(state,action)=>{
            state.userData = action.payload
            state.loading = false
            state.error = null
        })
        reducer.addCase(LoginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export {
    LoginUser
}
export default AuthSlice.reducer