export default function Input({
  legend = "Coorinate",
  onChange = () => {},
  value,
}) {
  return (
    <fieldset className="border px-2 pb-1  rounded">
      <legend className="px-1"> {legend}</legend>
      <input
        type="text"
        className="w-28"
        value={value || ""}
        onChange={onChange}
        placeholder={`Enter ${legend}`}
      />
    </fieldset>
  );
}
