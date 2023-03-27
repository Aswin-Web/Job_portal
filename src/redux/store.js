
import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/auth.data'

export default configureStore({
  reducer: {
    auth : userSlice,
  },
});