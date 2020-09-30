import { Post } from "./post";

export type PostsState = {
  loading: boolean,
  hasErrors: boolean,
  posts: Post[]
}
