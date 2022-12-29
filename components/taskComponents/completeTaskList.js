import React from "react";

const CompleteTaskList = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-w-5xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-3xl font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                Comment
              </th>
              <th scope="col" className="py-3 px-6">
                Task
              </th>
              <th scope="col" className="py-3 px-6">
                Complete
              </th>

              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-4 px-6">
                <img
                  className="w-10 h-10 rounded"
                  src="https://media.licdn.com/dms/image/D5635AQFK8-C5xgHFFQ/profile-framedphoto-shrink_400_400/0/1670515926178?e=1672873200&v=beta&t=RKAhgpe2XlFkvB2nEPjmqMGujyjm2f9qJhXADSVJEtU"
                  alt="Default avatar"
                />
              </td>
              <td className="py-4 px-6">
                {" "}
                <form>
                  <input
                    type="text"
                    id="default-input"
                    placeholder="write a comment"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </form>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Not Completed
                </button>
              </td>

              <td className="py-4 px-6 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompleteTaskList;
