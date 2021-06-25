import Notifications from "../../Dropdowns/Notifications";
import User from "../../Dropdowns/User";

import "./styles.css";

export default function MainHeader() {
  return (
    <header>
      <nav id="up">
        <a href="/main" className="go-home">
          <i className="bx bx-home-alt"></i>
          <img
            src="/images/logos/logo-header.png"
            alt="logo-header"
            id="SignHeaderImg"
          />
        </a>
        <div id="search-box">
          <input id="search" type="text" placeholder="buscar" />
          <i className="bx bx-search"></i>
        </div>
        <a href="#" className="btn" id="credits">
          0 créditos
        </a>
        <Notifications />
        <User />
      </nav>
    </header>
  );
}
