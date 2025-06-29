import React from "react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Php 8.4 Asymmetric Visibility Explained",
    date: "25 Apr, 2025",
    tags: "#laravel #tricks",
    highlighted: true,
  },
  {
    title: "Configuration Update For Hosting Laravel Livewire",
    date: "25 Apr, 2025",
    tags: "#laravel #tricks",
  },
  {
    title: "How To Run Mysql In Docker With Data Persistence",
    date: "25 Apr, 2025",
    tags: "#laravel #tricks",
  },
  {
    title: "How To Run Mysql In Docker With Data Persistence",
    date: "25 Apr, 2025",
    tags: "#laravel #tricks",
  },
  {
    title: "How To Run Mysql In Docker With Data Persistence",
    date: "25 Apr, 2025",
    tags: "#laravel #tricks",
  },
];

const LatestBlogs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Latest Blogs <span className="ml-1 text-red-500">&rsaquo;</span>
        </h2>

        <div className="space-y-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`flex items-center justify-between gap-4 px-6 py-5 rounded-xl group transition-all duration-300 cursor-pointer
                ${post.highlighted
                  ? "bg-white shadow-[0_30px_40px_-15px_rgba(0,0,0,0.1)] border-l-4 border-red-500"
                  : "bg-gray-50 hover:shadow-md hover:border-l-4 hover:border-red-500"
                }`}
            >
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {post.date} / {post.tags}
                </p>
              </div>

              <ArrowRight
                size={20}
                className="text-red-500 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
