import React from "react";
import Post from "./Post";

function ShowPosts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="w-5/6 ml-40 grid grid-flow-row-dense grid-cols-4 mt-8 box-content h-3/5">
      {posts.map(({ id, title, description, location }) => (
        <Post
          key={id}
          title={title}
          description={description}
          location={location}
        />
      ))}
    </div>
  );
}

export default ShowPosts;
