"use client";
import React, { useState } from "react";

const InformationComponent = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [content, setContent] = useState();

  const handleTitle = (e) => setTitle(e.target.value);

  const handleContent = (e) => setContent(e.target.value);

  const handleDescription = (e) => setDescription(e.target.value);

  const saveInformation = (e) => e.preventDefault();
  const information = { title, content, description };
  console.log(information);

  return (
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      {/* <div className="mt-10 text-center font-bold">Contact Us</div> */}
      <div className="mt-3 text-center text-4xl font-bold">
        Create Information
      </div>
      <div className="p-8 ">
        <div className>
          <label className="text-lg">Title</label>
          <input
            type="text"
            placeholder="Enter the title"
            name="title"
            value={title}
            onChange={(e) => handleTitle(e.target.value)}
            className="form-control mb-10 h-15 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black-300"
          />
        </div>
        <div className>
          <label className="text-lg">Content</label>
          <input
            type="text"
            placeholder="Enter the content"
            name="content"
            value={content}
            onChange={(e) => handleContent(e.target.value)}
            className="mb-10 h-15 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black-300"
          />
        </div>
        <div className>
          <label className="text-lg">Description</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => handleDescription(e.target.value)}
            className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black-300"
          />
        </div>

        <div className="text-center">
          <button
            className=" cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-lg font-semibold text-white"
            onClick={saveInformation}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationComponent;
