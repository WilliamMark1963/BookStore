import {createSlice} from '@reduxjs/toolkit'
import {mockData} from './mockData'
const booksList = createSlice({
    name:"books",
    initialState:{
        items:[
        ...mockData
        ]
    },
    reducers:{
        addBook: (state, action ) =>{
            state.items.push(action.payload)
        }
    }
})
export const { addBook } = booksList.actions;
export default booksList.reducer;