import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface postState {
  id: number  |  string;
  title: string ;
  content: string;
}

interface postsState {
    posts: postState[];
}
// Define the initial state using that type
const initialState: postsState = {
   posts :[]
};

export const postsSlice = createSlice({
  name: "posts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const { } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPost = (state: RootState) => state.posts;

export default postsSlice.reducer;
