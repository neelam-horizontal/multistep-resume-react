import React from "react";

const PersonalDetails = ({ formData, updateFormData, errors, setErrors }) => {
  const { firstName, lastName, city, phoneNumber, email } = formData;

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };
 
  const validateInputs = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!city) newErrors.city = "City is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!email) newErrors.email = "Email is required";
    return newErrors;
  };

  const srcProfile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71Tc9Tk2q1eJUUlX1bXhWrc0-g8O9xnAplw&usqp=CAU";

  return (
    <div className="mb-4 -mt-52">
      <img
        src={srcProfile}
        alt={srcProfile}
        width={50}
        height={50}
        className="flex-none rounded-full object-cover"
      />
      <h2 className="text-lg font-semibold mb-2">Personal Details</h2>
      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.firstName && "border-red-500"
        }`}
        placeholder="First Name"
        value={firstName}
        onChange={(e) => handleInputChange("firstName", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.lastName && "border-red-500"
        }`}
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => handleInputChange("lastName", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.city && "border-red-500"
        }`}
        placeholder="City"
        value={city}
        onChange={(e) => handleInputChange("city", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.city && <p className="text-red-500">{errors.city}</p>}

      <input
        type="text"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.phoneNumber && "border-red-500"
        }`}
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.phoneNumber && (
        <p className="text-red-500">{errors.phoneNumber}</p>
      )}

      <input
        type="email"
        className={`w-full border rounded px-3 py-2 mb-2 ${
          errors.email && "border-red-500"
        }`}
        placeholder="Email"
        value={email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        onBlur={() => setErrors(validateInputs())}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
    </div>
  );
};

export default PersonalDetails;
