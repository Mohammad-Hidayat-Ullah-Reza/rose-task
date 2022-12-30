import React from "react";

const TaskListTableRow = ({ taskDetail, status }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6">
        <img
          className="w-10 h-10 rounded"
          src="https://media.licdn.com/dms/image/D5635AQFK8-C5xgHFFQ/profile-framedphoto-shrink_400_400/0/1670515926178?e=1672873200&v=beta&t=RKAhgpe2XlFkvB2nEPjmqMGujyjm2f9qJhXADSVJEtU"
          alt="Default avatar"
        />
      </td>

      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {taskDetail}
      </th>
      <td className="py-4 px-6">
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {status}
        </button>
      </td>

      <td className="py-4 px-6 text-right">
        <button className="mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Edit
        </button>
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskListTableRow;
