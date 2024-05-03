type RadioButtonPropType = {
  label: string;
  value: string;
  name: string;

  checked: boolean;
  onChange: any;
};

const RadioButton = ({
  label,
  value,
  // register,
  name,

  checked,
  onChange,
}: // watch,
// validationSchema,
RadioButtonPropType) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="radio"
        name={name} // must all radio inputs that are related have same name attr
        value={value}
        id={value}
        onChange={onChange}
        checked={checked}
        // checked={watch(name) === value}
        // {...register(name, validationSchema)}
        className="w-4 h-4 cursor-pointer form-radio focus:ring-0 focus:ring-offset-0" /* form-radio comes from @tailwindcss/form plugin (that's why we can use text-green-500) */
      />
      <label htmlFor={value} className="cursor-pointer text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
