const SelectField = ({ label, name, options, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>

      <select
  name={name}
  value={value || ""}
  onChange={onChange}
  style={{
    border: error ? "1px solid red" : "1px solid #ccc"
  }}
></select>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SelectField;