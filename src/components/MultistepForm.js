import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import ProfessionalBackground from "./ProfessionalBackground";
import Hobbies from "./Hobbies";
import Resume from "./Resume";
import ResumeSummary from "./ResumeSummary";

const MultistepForm = () => {
  const [step, setStep] = useState(1);
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
    email: "",
    school: "",
    sscHscPercentage: "",
    highestDegree: "",
    company1: "",
    position1: "",
    experience: "",
    specialization: "",
    hobbies: "",
  });

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First Name is required";
      if (!formData.lastName) newErrors.lastName = "Last Name is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.phoneNumber)
        newErrors.phoneNumber = "Phone Number is required";
      if (!formData.email) newErrors.email = "Email is required";
    } else if (step === 2) {
      if (!formData.school) newErrors.school = "School is required";
      if (!formData.sscHscPercentage)
        newErrors.sscHscPercentage = "SSC / HSC Percentage is required";
      if (!formData.highestDegree)
        newErrors.highestDegree = "Highest Degree is required";
    } else if (step === 3) {
      if (!formData.company1)
        newErrors.company1 = "Past Company Name is required";
      if (!formData.position1) newErrors.position1 = "Position is required";
      if (!formData.experience) newErrors.experience = "Experience is required";
      if (!formData.specialization)
        newErrors.specialization = "Specialization is required";
    } else if (step === 4) {
      if (!formData.hobbies) newErrors.hobbies = "Hobbies are required";
    }
    return newErrors;
  };

  const nextStep = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  useEffect((newData) => {
    updateFormData(newData);
  }, [!errors]);

  const sections = [
    <PersonalDetails
      formData={formData}
      updateFormData={updateFormData}
      setErrors={setErrors}
      errors={errors}
    />,
    <EducationDetails
      formData={formData}
      updateFormData={updateFormData}
      setErrors={setErrors}
      errors={errors}
    />,
    <ProfessionalBackground
      formData={formData}
      updateFormData={updateFormData}
      setErrors={setErrors}
      errors={errors}
    />,
    <Hobbies
      formData={formData}
      updateFormData={updateFormData}
      setErrors={setErrors}
      errors={errors}
    />,
    <Resume formData={formData} updateFormData={updateFormData} />,
    <ResumeSummary formData={formData} />,
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-full bg-white shadow rounded">
        {sections[step - 1]}
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-blue-500 hover:bg-blue-700 border border-blue-500 text-white px-4 py-2 cursor-pointer rounded-full"
            >
              Previous
            </button>
          )}
          {step < sections.length && (
            <button
              onClick={nextStep}
              className={`${
                Object.keys(errors).length > 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
              } text-white border border-blue-500 font-bold py-2 px-4 rounded-full`}
              disabled={
                step < sections.length - 1 && Object.keys(errors).length > 0
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultistepForm;
