import { createSlice } from "@reduxjs/toolkit";
import { getFormatDate } from "../common/script/common";

export const dataSlice = createSlice({
  name: "reservation",
  initialState: {
    testData: {},
  },
  reducers: {
    addData: (state, action) => {
      if (action.payload.type === "symptom")
        state.dataSlice.testData = action.payload.value;
    },
  },
});

export const {
  addData,
} = dataSlice.actions;

export default dataSlice.reducer;
