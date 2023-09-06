import React from "react";

const Hobbies = ({ formData, updateFormData, setErrors, errors }) => {
  const { hobbies } = formData;

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };
 
  const validateInputs = () => {
    const newErrors = {};
    if (!hobbies) newErrors.hobbies = "Hobbies is required";
    return newErrors;
  };

  const srcHobby = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlehISzMMeuMKI2sx-KsdrJD_u8ECReVFRQ&usqp=CAU`;

  return (
    <div className="mb-4 -mt-36">
      <img
        src={srcHobby}
        alt={srcHobby}
        width={50}
        height={50}
        className="flex-none rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold mb-2">Hobbies</h2>
      <textarea
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.hobbies && "border-red-500"
        }`}
        placeholder="Hobbies"
        value={hobbies}
        onChange={(e) => handleInputChange("hobbies", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.hobbies && <p className="text-red-500">{errors.hobbies}</p>}
    </div>
  );
};

export default Hobbies;
