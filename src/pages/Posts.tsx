import React, { useEffect, MouseEvent } from "react";
import { useSelector } from "react-redux";

import PostItem from "../components/PostItem";

import { useAppDispatch } from "../store";
import { Post } from "../store/post/post";
import { createPost, fetchPosts, postsSelector } from "../slices/posts";

import "./Posts.css";

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, hasErrors } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const quotes = [
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)",
    "Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)",
    "Before software can be reusable it first has to be usable. (Ralph Johnson)",
    "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)",
    "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal)",
  ];

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;

    return posts.map((post: Post) => <PostItem key={post.id} post={post} />);
  };

  const addNewPost = (e: MouseEvent) => {
    e.preventDefault();
    const title = "Programming Quotes";
    const quote = quotes[Math.floor(Math.random() * 5)];

    dispatch(createPost(title, quote, posts.length));
  };

  return (
    <main className="Posts">
      <h1>My Posts</h1>
      <div className="Posts__buttonsContainer">
        <button className="Posts__addPostButton" onClick={(e) => addNewPost(e)}>
          Add Post
        </button>
      </div>
      <br />
      {renderPosts()}
    </main>
  );
};

export default Posts;
