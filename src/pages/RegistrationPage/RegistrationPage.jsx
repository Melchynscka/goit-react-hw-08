import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Register your account</h3>
      <RegistrationForm />
    </div>
  );
}