type TextFieldPropType = {
  label: string;
  name: string;
  value: any;
  onChange: any;
};

const TextField = ({ label, name, value, onChange }: TextFieldPropType) => {
  return (
    <div>
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>

      <input
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="textField__input mt-4"
      />
    </div>
  );
};

export default TextField;
