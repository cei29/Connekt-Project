import "./styles.css";

export default function LoginForm() {
  return (
    <form action="/authenticate" method="post" id="sign-form">
      <img id="sign-img" src="/images/sign.svg" alt="sign-img" />
      <span id="login-title">ENTRAR</span>
      <div className="form-box">
        <i className="bx bx-at"></i>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div className="form-box">
        <i className="bx bx-lock-alt"></i>
        <input type="password" name="password" placeholder="senha" />
      </div>
      <div id="login-check-div">
        <span id="login-check">
          <input type="checkbox" /> manter-se conectado(a)?{" "}
        </span>
      </div>
      <div>
        <a className="btn" id="btn-login" type="submit">
          entrar
        </a>
      </div>
    </form>
  );
}
