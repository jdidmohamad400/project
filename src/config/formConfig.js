const formConfig = [
  {
    type: "text",
    label: "Name",
    name: "name",
    required: true,
    minLength: 3
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: ["Syria", "UAE", "Germany"],
    required: true
  }
];

export default formConfig;