"use client";
import React, { useState } from "react";
import { createInformation } from "../services/InformationService";
// import { useNavigate } from "react-router-dom";

const InformationComponent = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [content, setContent] = useState();

  // const navigator=useNavigate();

  function saveInformation(e) {
    e.preventDefault();
    const information = { title, description, content };
    console.log(information);
    createInformation(information)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      {/* <div className="mt-10 text-center font-bold">Contact Us</div> */}
      <div className="mt-3 text-center text-4xl font-bold">
        Create Information
      </div>
      <div className="p-8 ">
        <div className="">
          <label className="text-lg">Title</label>
          <input
            type="text"
            placeholder="Enter the title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control mb-10 h-10 w-full resize-none rounded-md border border-slate-300 p-5  text-black-300"
          />
        </div>
        <div className="">
          <label className="text-lg">Content</label>
          <input
            type="text"
            placeholder="Enter the content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-10 h-10 w-full resize-none rounded-md border border-slate-300 p-5  text-black-300"
          />
        </div>
        <div className="">
          <label className="text-lg">Description</label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-10 h-30 w-full resize-none rounded-md border border-slate-300 p-5  text-black-300"
          />
        </div>

        <div className="text-center">
          <button
            className=" cursor-pointer rounded-lg bg-blue-700 px-8 py-4 text-sm font-semibold text-white"
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
