import "./Button.scss";

export default function IconButton({ children, onClick, ...allProps }) {
  return (
    <button type="button" className="Button" onClick={onClick} {...allProps}>
      {children}
    </button>
  );
}
