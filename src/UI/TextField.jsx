function TextField({
  type = "text",
  label,
  id,
  name,
  register,
  required,
  errors,
  validationSchema,
  extraClass,
}) {
  return (
    <div className={`space-y-1 ${extraClass ? extraClass : ""}`}>
      <label htmlFor={name} className="flex items-center gap-x-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        {...register(name, validationSchema)}
        className="bg-transparent rounded-xl border border-primary-500 text-primary-400 w-full md:w-auto p-2 hover:border-primary-300 focus:border-primary-300"
      />
      {errors && errors[name] && (
        <span className="text-red-500 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
