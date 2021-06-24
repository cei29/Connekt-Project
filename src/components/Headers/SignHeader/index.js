import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="/" className="go-home">
          <i className="bx bx-home-alt"></i>
          <img
            src="/images/logos/logo-header.png"
            alt="logo-header"
            id="SignHeaderImg"
          />
        </a>
        <div className="nav-links">
          <a href="/login">entrar</a>
          <a href="/sign-up">cadastrar</a>
        </div>
      </nav>
    </header>
  );
}
