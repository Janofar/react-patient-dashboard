import React from "react";
import { useNavigate } from "react-router-dom";
import {  DotsVerticalIcon } from "@heroicons/react/outline";
export const Patientlist = ({ patientData}) => {
  const navigate = useNavigate();
  const goToPatientInfoPg = () => {
    navigate("/223");
  };
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-3 text-gray-700 font-semibold border-b flex justify-between">
        <div className="text-gray-500">Patients</div>
        <div className="text-gray-500">Actions</div>
      </div>

      <div className="divide-y">
        {/* Patient Row */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              {patientData.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 hover:shadow-lg transition-shadow duration-200"
                  onClick={goToPatientInfoPg}
                >
                  <td className="px-6 py-4 border-b">
                    <div className="flex items-center space-x-4 pt-2">
                      {/* User Avatar (first letter of the name) */}
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500 text-center font-bold text-white">
                        {data.name[0]} {/* Display first letter of the name */}
                      </div>

                      {/* Name and additional info */}
                      <div>
                        <p className="text-lg font-semibold text-left">{data.name}</p>
                        <p className="text-sm text-gray-500 text-left">
                          {data.gender} • {data.age}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 w-[1%] border-b">
                    <div className="flex space-x-4 ">
                      {/* First Action Icon */}
                      <button className="w-6 h-6 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </button>
                      {/* Second Action Icon */}
                      <button className="w-6 h-6 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 w-[1%] border-b">
                    <span
                      className={`text-sm flex justify-start font-normal ${
                        index === 0
                          ? "text-yellow-600"
                          : index === 1
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      <span
                        className={`${
                          index === 0
                            ? "text-yellow-600"
                            : index === 1
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        •
                      </span>
                      {index === 0
                        ? "Sent"
                        : index === 1
                        ? "Expired"
                        : "Completed"}
                    </span>
                  </td>
                  <td className="px-6 py-4 w-[1%] border-b">
                    <button>
                      <DotsVerticalIcon className="w-6 h-6 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
