import { Toaster } from 'react-hot-toast';
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      <Toaster position="top-right" reversOrder={ false} />
    </div>
  );
}