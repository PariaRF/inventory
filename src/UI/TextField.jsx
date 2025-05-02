function TextField({ type = "text", label, id, name, register }) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(name)}
        className="bg-transparent rounded-xl border border-primary-500 text-primary-400 w-full md:w-auto p-2 hover:border-primary-300 focus:border-primary-300"
      />
    </div>
  );
}

export default TextField;
