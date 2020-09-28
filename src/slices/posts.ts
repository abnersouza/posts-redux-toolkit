import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { Post } from '../store/post/post'
import { PostsState } from '../store/post/types'

export const initialState: PostsState = {
  loading: false,
  hasErrors: false,
  posts: []
}

// A slice for posts with our three reducers
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
      state.loading = false
      state.hasErrors = false
    },
    getPostsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts = [action.payload].concat(state.posts)
    }
  },
})

// Three actions generated from the slice
export const { getPosts, getPostsFailure, getPostsSuccess, addPost } = postsSlice.actions

// A selector
export const postsSelector = (state: RootState) => state.posts

// The reducer
const postReducer = postsSlice.reducer
export default postReducer

// Asynchronous thunk action
export function fetchPosts() {
  // @ts-ignore
  return async (dispatch) => {
    try {
      dispatch(getPosts())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data: Post[] = await response.json()

      dispatch(getPostsSuccess(data.reverse()))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}