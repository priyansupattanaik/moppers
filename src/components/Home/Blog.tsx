import { blogSection } from "@/utils/blog";
import React from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="lg:main-container px-4 py-16">
      <div className="space-y-10">
        <div className="flex items-center gap-5 uppercase font-semibold text-sm">
          <span className="h-px w-12 bg-gray-400"></span>
          <div className="text-[#001837]">BLOG</div>
        </div>
        <div className="flex flex-col lg:flex-row  py-4 gap-5  justify-between items-center">
          <h2 className="text-3xl text-left md:text-4xl font-bold text-navy-900">
            Tips to keep the
            <br />
            surroundings clean.
          </h2>

          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            VIEW ALL POSTS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogSection.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <span>{post.category}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {post.title}
              </h3>
              <div className="flex items-center">
                <img
                  src={post.avatar}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p className="text-navy-900 font-semibold">{post.author}</p>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
