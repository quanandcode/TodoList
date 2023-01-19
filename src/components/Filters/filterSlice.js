// const initState = {
//   search: "",
//   status: "All",
//   priority: [], // mutil select nen intialvalue la 1 mang
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/changeSearch":
//       return {
//         ...state,
//         search: action.payLoad,
//       };
//     case "filter/changeFilterStatus":
//       return {
//         ...state,
//         status: action.payLoad,
//       };
//     case "filter/changeFilterPriority":
//       return {
//         ...state,
//         priority: action.payLoad,
//       };
//     default:
//       return state;
//   }
// };
// export default filterReducer;
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [], // mutil select nen intialvalue la 1 mang
  },
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    changeFilterStatus: (state, action) => {
      state.status = action.payload;
    },
    changeFilterPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
