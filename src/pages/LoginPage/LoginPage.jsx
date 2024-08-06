import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Please, log in</h3>
      <LoginForm />
      <div className={css.text}>
        Still does not have an account? Please
        <Link to="/register" className={css.link}>
          register now!
        </Link>
      </div>
    </div>
  );
}