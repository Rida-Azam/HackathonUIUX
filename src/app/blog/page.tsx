import React from "react";
import Sameheader from "../components/maincomponent/sameheader";
import BlogComp from "../components/maincomponent/blogComp";
import Sidebar from "./Sidebar";

function Blog() {
  return (
    <div>
      {/* Header Section */}
      <Sameheader
        start="Blog Page"
        middle="Home . Pages "
        last=" . Blog Page "
      />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Blog Component - Left Side */}
        <div className="w-full md:w-3/4">
          <BlogComp />
        </div>

        {/* Sidebar - Right Side */}
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Blog;
