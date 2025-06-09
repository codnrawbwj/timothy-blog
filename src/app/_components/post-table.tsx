import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import React from "react";

const PostTable = () => {
  const posts = getAllPosts().slice(0, 7);

  return (
    <div id="post-table" className="w-full flex flex-col gap-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex items-start sm:items-center sm:gap-4 sm:flex-row flex-col gap-2"
          href={`/posts/${post.slug}`}
        >
          <p className="text-lg font-bold flex-1">{post.title}</p>
          <div className="flex w-full sm:w-auto justify-between gap-2 sm:gap-0">
            <p className="text-sm text-gray-500 whitespace-nowrap mr-2">
              {post.project}
            </p>
            <p className="text-sm text-gray-500 whitespace-nowrap">
              {post.date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostTable;
