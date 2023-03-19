import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: { type:'none',verification:'false' },
  reducers: {
   
    changeType:(state,action) =>{
        state.type=action.payload
    },
    changeVerification:(state,action) =>{
        state.action=action.payload
    }
  },
});

export const { changeType } = userSlice.actions;
export const { changeVerification } = userSlice.actions;
export default userSlice.reducer;
