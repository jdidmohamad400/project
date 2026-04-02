import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";

const fieldMap = {
  text: TextField,
  select: SelectField
};

const FieldRenderer = ({ field, value, onChange, error }) => {
  const Component = fieldMap[field.type];

  if (!Component) return null;

  return (
    <Component
      {...field}
      value={value}
      onChange={onChange}
      error={error}
    />
  );
};

export default FieldRenderer;