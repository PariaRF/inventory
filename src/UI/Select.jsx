function Select({ width = "full", options, label, name, register }) {
  return (
    <div>
      <label>{label}</label>
      <select
        {...register(name, { required: true })}
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
    </div>
  );
}

export default Select;
