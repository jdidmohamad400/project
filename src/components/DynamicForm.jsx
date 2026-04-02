import { useState } from "react";
import FieldRenderer from "./FieldRenderer";
import formConfig from "../config/formConfig";

const DynamicForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    const field = formConfig.find((f) => f.name === name);
    let error = "";

    if (field.required && !value) {
      error = "This field is required";
    }

    if (field.minLength && value.length < field.minLength) {
      error = `Minimum ${field.minLength} characters`;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };

  const validate = () => {
    let newErrors = {};

    formConfig.forEach((field) => {
      const value = formData[field.name];

      if (field.required && !value) {
        newErrors[field.name] = "This field is required";
      }

      if (field.minLength && value && value.length < field.minLength) {
        newErrors[field.name] = `Minimum ${field.minLength} characters`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(" Submitted Data:", formData);
    } else {
      console.log(" Errors:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field, index) => (
        <FieldRenderer
          key={index}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
        />
      ))}

      <button type="submit">Submit</button>

      <button
        type="button"
        onClick={() => {
          setFormData({});
          setErrors({});
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default DynamicForm;