import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Sport } from "src/models/sports";
import { ContentRepository } from "src/api/ContentRepository";
import { sortSportArrayAZ, sortSportArrayZA } from "./utils";


const contentRepo = new ContentRepository()

interface CardSportState {
  orderBy: string
  sports: Sport[]
}
const initialState: CardSportState = {
  orderBy: '',
  sports: [{name: '', description: ''}],
  
}

export const fetchSportsAsync = createAsyncThunk<Sport[], string>(
  'fetchSportsAsync', 
  async (orderBy, thunkAPI) => {
    try {
      const sportsString = JSON.stringify(await contentRepo.getFeaturedSports())
      const sports = JSON.parse(sportsString)
      // order sports by orderBy
      if (orderBy === 'az') {
        sortSportArrayAZ(sports)
      } else if (orderBy === 'za') {
        sortSportArrayZA(sports)
      }
      return sports
    } catch (error: any) {
      thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const sportSlice = createSlice({
  name: 'sports',
  initialState, 
  reducers: {setOrderByPram: (state, action) => {
      state.orderBy = action.payload
      if (action.payload === 'az') {
        sortSportArrayAZ(state.sports)
      } else if (action.payload === 'za') {
        sortSportArrayZA(state.sports)
      }
  }},
  extraReducers: (builder => {
    builder.addCase(fetchSportsAsync.fulfilled, (state, action) => {
     
      state.sports = action.payload
      
    })
    builder.addCase(fetchSportsAsync.rejected, (state, action) => {
      console.log(action.payload)
    })
  })
})

export const {setOrderByPram} = sportSlice.actions