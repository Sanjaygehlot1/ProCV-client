import { AxiosInstance } from "@/Axios/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    resume : {},
    loading : false,
    error : null
}

const GetResumeById = createAsyncThunk("resume/get",async (resumeId,{rejectWithValue})=>{
    console.log(resumeId)
    try {
        if(resumeId){
         const Response =   await AxiosInstance.get(`/resume/get-resume/${resumeId}`)

         if(Response){
            console.log(Response)
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 

const ResumeSlice = createSlice({
    name: "Resume",
    initialState,
    extraReducers: (reducer)=>{
        reducer.addCase(GetResumeById.pending,(state)=>{
            state.loading = true
        })
        reducer.addCase(GetResumeById.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload
        })
        reducer.addCase(GetResumeById.rejected,(state,action)=>{
            state.loading = true,
            state.error = action.payload
        })
    }
})

export {
    GetResumeById
}

export default ResumeSlice.reducer