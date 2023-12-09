import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Sport } from "src/models/sports";
import { ContentRepository } from "src/api/ContentRepository";

const contentRepo = new ContentRepository()
const initialState: Sport[] = [
  {name: '', description: ''}
]
export const fetchSportsAsync = createAsyncThunk<Sport[]>(
  'fetchSportsAsync', 
  async (_, thunkAPI) => {
    try {
      const sports = JSON.stringify(await contentRepo.getFeaturedSports())
      return JSON.parse(sports)
    } catch (error: any) {
      thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const sportSlice = createSlice({
  name: 'sports',
  initialState, 
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchSportsAsync.fulfilled, (state, action) => {
      
      state = action.payload
    })
    builder.addCase(fetchSportsAsync.rejected, (state, action) => {
      console.log(action.payload)
    })
  })
})