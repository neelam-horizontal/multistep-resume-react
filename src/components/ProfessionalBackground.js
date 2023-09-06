import React from "react";

const ProfessionalBackground = ({
  formData,
  updateFormData,
  errors,
  setErrors,
}) => {
  const { company1, position1, experience, specialization } = formData;

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!company1) newErrors.company1 = "Company Name is required";
    if (!position1) newErrors.position1 = "Position is required";
    if (!experience) newErrors.experience = "Experience is required";
    if (!specialization)
      newErrors.specialization = "Specialization is required";
    return newErrors;
  };

  const srcProf = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcsjUdbIreixX1rCSwInS1wsAkkEnhnGKjw&usqp=CAU`;

  return (
    <div className="mb-4 -mt-32">
      <img
        src={srcProf}
        alt={srcProf}
        width={50}
        height={50}
        className="flex-none rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold mb-2">Professional Background</h2>
      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.company1 && "border-red-500"
        }`}
        placeholder="Past Company Name"
        value={company1}
        onChange={(e) => handleInputChange("company1", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.company1 && <p className="text-red-500">{errors.company1}</p>}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.position1 && "border-red-500"
        }`}
        placeholder="Position"
        value={position1}
        onChange={(e) => handleInputChange("position1", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.position1 && <p className="text-red-500">{errors.position1}</p>}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.experience && "border-red-500"
        }`}
        placeholder="Experience"
        value={experience}
        onChange={(e) => handleInputChange("experience", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.experience && <p className="text-red-500">{errors.experience}</p>}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.specialization && "border-red-500"
        }`}
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => handleInputChange("specialization", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.specialization && (
        <p className="text-red-500">{errors.specialization}</p>
      )}
    </div>
  );
};

export default ProfessionalBackground;
