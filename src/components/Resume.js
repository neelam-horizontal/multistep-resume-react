import React, { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";

const Resume = ({ formData, updateFormData }) => {
  const {
    firstName,
    lastName,
    city,
    phoneNumber,
    email,
    school,
    sscHscPercentage,
    highestDegree,
    company1,
    position1,
    experience,
    specialization,
    hobbies,
  } = formData;

  const srcProfile = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71Tc9Tk2q1eJUUlX1bXhWrc0-g8O9xnAplw&usqp=CAU`;
  const srcEduc = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7LIEvm3TImUCPd5MxnTXKjRtF6Wk-ZK1GA&usqp=CAU`;
  const srcProf = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcsjUdbIreixX1rCSwInS1wsAkkEnhnGKjw&usqp=CAU`;
  const srcHobby = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlehISzMMeuMKI2sx-KsdrJD_u8ECReVFRQ&usqp=CAU`;

  const [editedFormData, setEditedFormData] = useState({});

  const ref = useRef(null);

  const handleEditInputChange = (field, value) => {
    setEditedFormData((prevData) => ({ ...prevData, [field]: value }));
    updateFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };
  
  const saveEditedData = () => {
    try {
      updateFormData(editedFormData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-4">
      <div className="mb-4">
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and informations about user.
        </p>
        <div className="p-4 rounded">
          {/* Profile */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
              <img
                src={srcProfile}
                alt={srcProfile}
                width={50}
                height={50}
                className="flex-none rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold">Personal Details</h3>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="First Name"
                      defaultValue={firstName}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("firstName", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Last Name"
                      defaultValue={lastName}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("lastName", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">City</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="City"
                      defaultValue={city}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("city", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Phone Number"
                      defaultValue={phoneNumber}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("phoneNumber", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="email"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Email"
                      defaultValue={email}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("email", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Educatiom */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
              <img
                src={srcEduc}
                alt={srcEduc}
                width={50}
                height={50}
                className="flex-none rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold">Education Details</h3>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">School</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="School"
                      defaultValue={school}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("school", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  SSC / HSC Percentage
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="SSC/HSC Percentage"
                      defaultValue={sscHscPercentage}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange(
                          "sscHscPercentage",
                          e.target.value
                        )
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Highest Degree
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Highest Degree"
                      defaultValue={highestDegree}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("highestDegree", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Profession */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
              <img
                src={srcProf}
                alt={srcProf}
                width={50}
                height={50}
                className="flex-none rounded-full object-cover"
              />
              <h3 className="text-lg md:-ml-8 font-semibold">
                Professional Background
              </h3>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Past Company Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Company Name"
                      defaultValue={company1}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("company1", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Position</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Position"
                      defaultValue={position1}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("position1", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Experience
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Experience"
                      defaultValue={experience}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("experience", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Specialization
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Specialization"
                      defaultValue={specialization}
                      ref={ref}
                      onChange={(e) =>
                        handleEditInputChange("specialization", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Hobby */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <img
                src={srcHobby}
                alt={srcHobby}
                width={50}
                height={50}
                className="flex-none rounded-full object-cover"
              />
              <h3 className="text-lg ml-8 font-semibold">Hobbies</h3>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Hobbies</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex">
                    <textarea
                      type="text"
                      className="w-full border rounded px-3 py-2 mb-2"
                      placeholder="Hobbies"
                      defaultValue={hobbies}
                      ref={ref}
                      rows={5}
                      onChange={(e) =>
                        handleEditInputChange("hobbies", e.target.value)
                      }
                    />
                    <FaEdit />
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <button
        onClick={saveEditedData}
        className="bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white px-4 py-2 cursor-pointer rounded-full sm:ml-[40%] md:ml-[50%]"
      >
        Save
      </button>
    </div>
  );
};

export default Resume;
