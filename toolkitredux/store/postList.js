import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import postAUther from "./postAUther";
import React from "react";

const postList = () => {
  const posts = useSelector((state) => state.posts);
  const renderedPosts = posts.map((post) => (
    <form className=" border-2 rounded-lg py-4 bg-white" key={post.id}>
      <h3>{post.title}</h3>
      <p className="color">
        {console.warn('post',post.userId)}
        <postAUther userId={post.userId} />
      </p>
      {/* <h3>{post.content.sub}</h3> */}
    </form>
  ));
  return (
    <section className=" bg-slate-700 p-5 text-center border-2 rounded-xl">
      <h2 className="text-5xl text-white p-4">Post</h2>
      {renderedPosts}
    </section>
  );
};

export default postList;
