function TextArea({ name, id, cols = "50", rows = "3", label, register }) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <textarea
        id={id}
        cols={cols}
        rows={rows}
        {...register(name)}
        className="bg-transparent rounded-xl border border-primary-500 text-primary-400 w-full p-2  hover:border-primary-300 focus:border-primary-300"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
          }
        }}
      ></textarea>
    </div>
  );
}

export default TextArea;
