import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
        actions.resetForm();
    }

    return (
        <div className={css.formContainer}>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
            >
                <Form classname={css.form}
                    autoComplete="off">
                    <label className={css.label}>
                        Email
                        <Field className={css.inputField} type="email" name="email" />
                    </label>
                    <label className={css.label}>
                        Password
                        <Field className={css.inputField} type="password" name="password" />
                    </label>
                    <button className={css.submitBtn} type="submit">Log In</button>
                </Form>
            </Formik>
        </div>
    );
}