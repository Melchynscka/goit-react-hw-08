import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };
    
    return (
        <div className={css.formContainer}>
            <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                }}
                onSubmit= {handleSubmit}
                >
                <Form>
                <label className={css.label}>
                    Username
                    <Field className={css.inputField} type="text" name="name"/>
                </label>
                <label className={css.label}>
                    Email 
                    <Field className={css.inputField} type="email" name="email"/>
                </label>
                <label className={css.label}>
                    Password 
                    <Field className={css.inputField} type="password" name="password"/>
                </label>
                <button className={css.submitBtn} type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
}