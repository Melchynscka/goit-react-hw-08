import { FcContacts } from "react-icons/fc";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.container}>
      <p className={css.title}>Welcome to your personal contact list</p>
      <div className={css.iconWrapp}>
        <FcContacts className={css.icon } />
      </div>
    </div>
  );
}