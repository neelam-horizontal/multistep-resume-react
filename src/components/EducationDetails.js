import React from "react";

const EducationDetails = ({ formData, updateFormData, errors, setErrors }) => {
  const { school, sscHscPercentage, highestDegree } = formData;

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };
 
  const validateInputs = () => {
    const newErrors = {};
    if (!school) newErrors.school = "School is required";
    if (!sscHscPercentage)
      newErrors.sscHscPercentage = "SSC / HSC Percentage is required";
    if (!highestDegree) newErrors.highestDegree = "Highest Degree is required";
    return newErrors;
  };

  const srcEduc = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7LIEvm3TImUCPd5MxnTXKjRtF6Wk-ZK1GA&usqp=CAU`;

  return (
    <div className="mb-4 -mt-32">
      <img
        src={srcEduc}
        alt={srcEduc}
        width={50}
        height={50}
        className="flex-none rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold mb-2">Education Details</h2>

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.school && "border-red-500"
        }`}
        placeholder="School"
        value={school}
        onChange={(e) => handleInputChange("school", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.school && <p className="text-red-500">{errors.school}</p>}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.sscHscPercentage && "border-red-500"
        }`}
        placeholder="SSC / HSC Percentage"
        value={sscHscPercentage}
        onChange={(e) => handleInputChange("sscHscPercentage", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.sscHscPercentage && (
        <p className="text-red-500">{errors.sscHscPercentage}</p>
      )}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.highestDegree && "border-red-500"
        }`}
        placeholder="Highest Degree"
        value={highestDegree}
        onChange={(e) => handleInputChange("highestDegree", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.highestDegree && (
        <p className="text-red-500">{errors.highestDegree}</p>
      )}
    </div>
  );
};

export default EducationDetails;
