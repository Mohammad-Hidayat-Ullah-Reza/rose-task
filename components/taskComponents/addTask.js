import React from "react";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitTask = (data, e) => {
    const taskDetail = data.taskDetail;
    const doc = {
      taskDetail,
      status: "not completed",
    };
    console.log(taskDetail);
    fetch(`http://localhost:5000/task`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    e.target.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="my-10 text-4xl font-bold text-center">Add Your Task</h2>
      <form
        onSubmit={handleSubmit(handleSubmitTask)}
        className="flex flex-col w-full max-w-xl"
      >
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task
          </label>
          <textarea
            {...register("taskDetail")}
            id="message"
            rows="4"
            placeholder="write your task"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
