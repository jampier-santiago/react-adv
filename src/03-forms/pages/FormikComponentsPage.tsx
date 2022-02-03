import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../styles/styles.css";

const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Components Page</h1>

      <Formik
        initialValues={{
          firstName: "Jampier",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={yup.object({
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
          terms: yup
            .boolean()
            .oneOf([true], "Debe de aceptar las correcciones"),
          jobType: yup
            .string()
            .required("Requerido")
            .notOneOf(["IT-jr"], "Valor no permitido"),
        })}
      >
        {() => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email address</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job type</label>
            <Field id="jobType" name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="dev">dev</option>
              <option value="designer">designer</option>
              <option value="IT-Senior">IT Senior</option>
              <option value="IT-jr">IT jr</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">Terms and conditions</label>
            <Field type="checkbox" id="terms" name="terms" />
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Crear</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponentsPage;
