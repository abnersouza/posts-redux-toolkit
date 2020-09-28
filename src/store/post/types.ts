import { ActionCreatorWithPayload, ActionCreatorWithoutPayload, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./post";

export type PostsState = {
  loading: boolean,
  hasErrors: boolean,
  posts: Post[]
}

type GetPosts = {
  type: string;
}

type GetPostsSuccess = {
  type: string;
  payload: Post[]
}

type GetPostsFailure = {
  type: string;
}

type AddPost = {
  type: string;
  payload: Post
}

type PostsActions = GetPosts | GetPostsSuccess | GetPostsFailure | AddPost;

export type DispatchType = (a: PayloadAction<PostsActions>) => PayloadAction<PostsActions>

