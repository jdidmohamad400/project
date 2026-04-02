const TextField = ({ label, name, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
     <input
  type="text"
  name={name}
  value={value || ""}
  onChange={onChange}
  style={{
    border: error ? "1px solid red" : "1px solid #ccc"
  }}
/>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextField;