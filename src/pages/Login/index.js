import SignHeader from "../../components/Headers/SignHeader";
import LoginForm from "../../components/Forms/LoginForm";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Login() {
  return (
    <>
      <SignHeader />
      <main id="sign">
        <div className="login-box">
          <LoginForm />
        </div>
        <Footer />
      </main>
    </>
  );
}
