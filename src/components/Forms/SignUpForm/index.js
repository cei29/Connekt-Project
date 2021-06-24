import "./styles.css";

export default function SignUpForm() {
  return (
    <form action="/authenticate" method="post" id="signUpForm">
      <img id="sign-img" src="/images/sign.svg" alt="sign-img" />
      <span id="sign-up-title">Criar Conta</span>
      <div className="form-box" id="below-title">
        <i className="bx bx-at"></i>
        <input type="text" name="username" placeholder="usuário" />
      </div>
      <div className="form-box">
        <i className="bx bx-lock-alt"></i>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div className="form-box">
        <i className="bx bx-lock-alt"></i>
        <input type="password" name="password" placeholder="senha" />
      </div>
      <div className="form-box">
        <i className="bx bx-lock-alt"></i>
        <input
          type="password"
          name="password"
          placeholder="confirme sua senha"
        />
      </div>
      <div id="signup-check-div">
        <span id="login-check">
          <input type="checkbox" /> concorda em compartilhar seus dados?{" "}
        </span>
      </div>
      <div>
        <a href="#" className="btn" id="btn-signup" type="submit">
          cadastrar
        </a>
      </div>
    </form>
  );
}
