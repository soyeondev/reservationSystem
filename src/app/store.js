import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../counter/dataSlice'
export default configureStore({
  reducer: {
    reservation: dataSlice,
  },
})