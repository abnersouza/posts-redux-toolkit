import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './posts'
// import articleReducer from "../store/article/reducer"

const rootReducer = combineReducers({
  posts: postReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer