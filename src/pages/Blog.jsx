import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";
import HashLoader from "react-spinners/HashLoader.js";
import useFetchData from "../hooks/useFetchData";

function ShowBlog() {
  const param = useParams();
  const [blog, setBlog] = useState();

  const fetchBlogs = async () => {
    const res = await fetch(`${BASE_URL}/blogs/${param.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setBlog(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blog);

  return (
    <div>
      {blog ? (
        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white  antialiased">
          <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <>
                <header class="mb-4 lg:mb-6 not-format">
                  <address class="flex items-center mb-6 not-italic">
                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                      <img
                        class="mr-4 w-16 h-16 rounded-full"
                        src={blog?.doctorId?.photo}
                        alt="Jese Leos"
                      />
                      <div>
                        <a href="#" rel="author" class="text-xl font-bold">
                          {blog?.doctorId?.name}
                        </a>
                        <p class="text-base text-gray-500 dark:text-gray-400">
                          {blog?.doctorId?.specialization}
                        </p>
                      </div>
                    </div>
                  </address>
                  <h1 class="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl">
                    {blog?.title}
                  </h1>
                </header>

                <div>
                  <p class="mb-4 text-xl  leading-tight  lg:mb-6 lg:text-xl ">
                    {blog?.summary}
                  </p>
                </div>

                <div>
                  <img src={blog?.image} alt="Image" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
              </>
            </article>
          </div>
        </main>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#0067FF" />
        </div>
      )}
    </div>
  );
}

export default ShowBlog;
