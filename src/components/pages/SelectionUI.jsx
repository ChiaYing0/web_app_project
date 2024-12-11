import { Select, Space } from "antd";

function SelectionUI({ title, default_value, options, handleChange }) {
  const onChange = (value) => {
    handleChange(value);
  };

  return (
    <div>
      <h1>{title}</h1>
      <Select
        defaultValue={default_value}
        style={{ width: 120 }}
        onChange={onChange}
        options={options}
      />
    </div>
  );
}

export default SelectionUI;
