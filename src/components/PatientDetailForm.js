import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { XIcon } from "@heroicons/react/outline";
import maskGroupImg from "../assets/img/Mask group.png";

const PatientDetailForm = ({ toggleModal, patientData, setPatientData }) => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    isResponsibleParty: false,
    age : 'Not specified',
    gender :'Not specified'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const addPatient = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      isResponsibleParty:
        formData.isResponsibleParty === "on" ||
        formData.isResponsibleParty === true,
    };

    toggleModal();
    localStorage.setItem("patientData", JSON.stringify([...patientData, updatedFormData]));
    setPatientData([...patientData, updatedFormData]);

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative z-10 mx-4 sm:mx-0 overflow-hidden">
        <img
          src={maskGroupImg}
          alt="Patient Banner"
          className="object-cover"
        />

        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-start text-[1.62rem] text-[#1C1C1C] font-bold mb-4">
            Add Patient
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block font-medium text-gray-700 mb-1 text-[1rem]  text-left"
                htmlFor="patientName"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="patientName"
                name="name"
                className="mt-1 block font-normal text-[1rem] w-full border-b-2 border-gray-300 focus:border-green-600 focus:bg-green-50 focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="inline-flex items-center text-[0.8rem] font-medium text-gray-700 text-left w-full"
                htmlFor="isResponsibleParty"
              >
                <input
                  type="checkbox"
                  id="isResponsibleParty"
                  name="isResponsibleParty"
                  className="custom-checkbox"
                  onChange={handleChange}
                />
                <span className="ml-2">Patient is the responsible party</span>
              </label>
            </div>

            <div className="mb-5 text-[1rem] text-[#1C1C1C]">
              <label
                className="block font-medium text-gray-700 mb-1 text-left"
                htmlFor="phone"
              >
                Phone
              </label>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={handlePhoneChange}
                name="phone"
                inputClass="custom-phone-input"
                placeholder=""
                enableSearch
              />
            </div>

            <div className="mb-4 text-[1rem] text-[#1C1C1C]">
              <label
                className="block font-medium text-gray-700 mb-1 text-left"
                htmlFor="email"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-b-2 border-gray-300 focus:border-green-600 focus:bg-yellow-50 focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white rounded-[31px] w-[7.25rem] text-[1rem] font-medium px-4 py-2"
                onClick={addPatient}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailForm;
