import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import "../styles/styles.css";

const RegisterFormik = () => {
  const onSubmit = (event: any) => {
    console.log(event);
  };

  return (
    <div>
      <h1>register formik</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object({
          name: yup
            .string()
            .required("El campo es requerido")
            .max(15, "El campo debe tener maximo 15 caracteres")
            .min(2, "El campo debe tener minimo 2 caracteres"),
          email: yup
            .string()
            .required("El campo es requerido")
            .email("Formato invalido"),
          password1: yup
            .string()
            .min(6, "El campo debe tener minimo 6 caracteres")
            .required("El campo es requerido"),
          password2: yup
            .string()
            .required("Es requerido")
            .oneOf([yup.ref("password1")], "Las contraseñas no son iguales"),
        })}
      >
        {({ errors, handleReset }) => (
          <Form>
            <Field
              type="text"
              placeholder="name"
              name="name"
              className={`${errors.name && "has-error"}`}
            />
            <ErrorMessage name="name" component="span" />

            <Field
              type="email"
              placeholder="email"
              name="email"
              className={`${errors.email && "has-error"}`}
            />
            <ErrorMessage name="email" component="span" />

            <Field
              type="password"
              placeholder="Password 1"
              name="password1"
              className={`${errors.password1 && "has-error"}`}
            />
            <ErrorMessage name="password1" component="span" />

            <Field
              type="password"
              placeholder="Repeat Password"
              name="password2"
              className={`${errors.password2 && "has-error"}`}
            />
            <ErrorMessage name="password2" component="span" />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
