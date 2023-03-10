import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-0  lg:p-8 pb-12 mb-8">
      {/* <div className="relative overflow-hidden shadow-md pb-80 mb-6"> */}
      <div className="relative overflow-hidden shadow-md pb-80 mb-6 lg:pb-4/6 ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-full w-full object-cover shadow-lg rounded-t-xl lg:rounded-xl"
          // className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-xl lg:rounded-xl"
        />
      </div>
      <h1
        className="transition duration-1000 text-center mb-4 mr-6 ml-6 cursor-pointer 
      hover:text-indigo-600 text-2xl font-semibold"
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-4 w-full">
        <div className="flex items-center justify-center mb-4 lg:md-0 w-full lg:w-auto">
          <img
            className="md:block hidden align-middle rounded-full"
            alt={post.author.name}
            height="30px"
            width="30px"
            src={post.author.photo.url}
          />
          <p className="md:inline hidden  align-middle text-gray-700 ml-2 mr-2 text-lg">
            {post.author.name}
          </p>
        </div>

        <div className="font-medium text-lg text-gray-700 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 inline ml-2 mr-2 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      {/* Post Excerpt */}
      <p className="md:block hidden text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1- hover:bg-gray-700 inline-block bg-indigo-600 opacity-70 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
