import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { AppDispatch, AppThunk } from '../store'
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
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload)
    },
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
    }
  },
})

// Actions generated from the slice
const { addPost, getPosts, getPostsFailure, getPostsSuccess } = postsSlice.actions

// A selector
export const postsSelector = (state: RootState) => state.posts

// The reducer
const postReducer = postsSlice.reducer
export default postReducer

// Actions that have side effect
export const fetchPosts = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPosts())
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: Post[] = await response.json()

    dispatch(getPostsSuccess(data.reverse()))
  } catch (error) {
    dispatch(getPostsFailure())
  }
}

export const createPost = (title: string, body: string, counter: number): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const newPost: Post = {
      id: ++counter,
      title,
      body,
      userId: Math.random(),
    };

    dispatch(addPost(newPost))
  } catch (error) {
    dispatch(getPostsFailure())
  }
}