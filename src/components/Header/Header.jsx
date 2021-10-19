import Logo from "../../img/logo.png";
import "./Header.scss";
import { useMedia } from "react-use";

export default function Header() {
  const tabletMode = useMedia("(min-width: 768px)");

  return (
    <header className="header">
      {tabletMode && (
        <img
          className="icon-logo"
          src={Logo}
          height="70"
          width="70"
          alt="Icon logo"
        />
      )}
      <h1 className="header-title">bicycle rental service</h1>
    </header>
  );
}
