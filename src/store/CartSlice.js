const {createSlice}=require("@reduxjs/toolkit")
const initialState=[]
const CartSlice=createSlice({
    name:"laida",
    initialState,
    reducers:{
        add(state,action){
            // return [...state,action.payload]
            state.push(action.payload);
        },
        remove(state,action){
            return  state.filter((data)=>{return (data.id !== action.payload)});
        }
    }
})
export const {add,remove}=CartSlice.actions;
export const Slice= CartSlice.reducer;
