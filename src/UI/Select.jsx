function Select({
  width = "full",
  options,
  label,
  name,
  register,
  required,
  errors,
  validationSchema,
}) {
  return (
    <div>
      <label>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, validationSchema)}
        className={`field w-${width}`}
      >
        <option value="" className="bg-primary-500 text-primary-300">
          Select a category
        </option>
        {options.map((optionItem) => {
          return (
            <option
              key={optionItem.id}
              value={optionItem.id}
              className="bg-primary-500 text-primary-300"
            >
              {optionItem.title}
            </option>
          );
        })}
      </select>
      {errors && errors[name] && (
        <span className="text-red-500 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default Select;
