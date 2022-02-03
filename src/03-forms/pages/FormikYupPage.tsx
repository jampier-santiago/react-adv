import { useFormik } from "formik";
import * as yup from "yup";
import "../styles/styles.css";

const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: { firstName: "Jampier", lastName: "", email: "" },
    onSubmit: (values) => console.log(values),
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "debe tener maximo 15 caracteres")
        .required("Requerido"),
      lastName: yup
        .string()
        .max(15, "Debe tener maximo 15 caracteres")
        .required("Requerido"),
      email: yup
        .string()
        .email("Debe tener un formato valido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Page</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email address</label>
        <input type="text" id="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
