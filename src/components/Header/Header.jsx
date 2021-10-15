import Logo from "../../img/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img
        className="icon-logo"
        src={Logo}
        height="70"
        width="70"
        alt="Icon logo"
      />
      <h1 className="header-title">bicycle rental service</h1>
    </header>
  );
}
