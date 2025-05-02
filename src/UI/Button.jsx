function Button({ buttonName, onClick, btnClass, type = "button" }) {
  return (
    <button className={btnClass} onClick={onClick} type={type}>
      {buttonName}
    </button>
  );
}

export default Button;
