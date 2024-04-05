import { configureStore } from '@reduxjs/toolkit'

import postsReducer  from '../features/postsSlice'
import userReducer from '../features/userSlice'
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, user: UserState}
export type AppDispatch = typeof store.dispatch
