import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config";
import HashLoader from "react-spinners/HashLoader.js";

function Blogs() {
  const { user, token, role } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch(`${BASE_URL}/blogs`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between m-4">
      {blogs.length > 0 ? (
        blogs.map((data) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <img
              src={data.image}
              alt="Blog Image"
              className="w-full h-40 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {data.title}
              </h2>

              <p className="mt-2 text-gray-600">{data.summary}</p>

              <div
                className="mt-4 prose prose-lg text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: data.content.slice(0, 350) + " ...",
                }}
              ></div>
              <Link style={{ color: "blue" }} to={`/${data._id}`}>
                {" "}
                Read more ...
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#0067FF" />
        </div>
      )}
      {role === "doctor" && (
        <Link
          to="/doctor/blog"
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Generate Blog
        </Link>
      )}
    </div>
  );
}

export default Blogs;
