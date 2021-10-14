import "./Button.scss";

export default function IconButton({ children, onClick, styles, ...allProps }) {
  return (
    <button type="button" className="button" onClick={onClick} {...allProps}>
      {children}
    </button>
  );
}
