import { AxiosInstance } from "@/Axios/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData : {},
    loading : false,
    error : null,
    userResumes : []
}

const RegisterUser = createAsyncThunk("user/register",async (data,{rejectWithValue})=>{
    try {
        if(data){
            console.log(data)
           const Response = await AxiosInstance.post("/users/register",data)
           if(Response){
            console.log(Response)
           
            return Response.data.data
           }
        }
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message)
    }
})

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
        reducer.addCase(RegisterUser.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(RegisterUser.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
        })
        reducer.addCase(RegisterUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export {
    LoginUser,
    RegisterUser

}
export default AuthSlice.reducer