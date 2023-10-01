import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";
import  HashLoader  from "react-spinners/HashLoader.js";

function ShowBlog() {
  const param = useParams();
  const [blog, setBlog] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch(`${BASE_URL}/blogs/${param.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setBlog([data]);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {blog.length > 0 ? (
        blog.map((data) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 m-4">
            <img
              src={data.image}
              alt="image..."
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {data.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6">{data.summary}</p>
              <p
                className="text-gray-700 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.content }}
              ></p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#0067FF" />
        </div>
      )}
    </div>
  );
}

export default ShowBlog;
