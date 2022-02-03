import { Formik, Form } from "formik";
import * as yup from "yup";
import "../styles/styles.css";

import { components } from "../components";

const { CheckboxComponent, SelectComponent, TextInput } = components;

const FormikAbstractPage = () => {
  return (
    <div>
      <h1>Formik Components Page</h1>

      <Formik
        initialValues={{
          firstName: "",
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
            <TextInput
              label="First name"
              name="firstName"
              id="firstName"
              type="text"
            />

            <TextInput
              label="Last name"
              name="lastName"
              id="lastName"
              type="text"
            />

            <TextInput
              label="Email address"
              name="email"
              id="email"
              type="text"
            />

            <SelectComponent id="jobType" name="jobType" label="Job type">
              <option value="">Pick something</option>
              <option value="dev">dev</option>
              <option value="designer">designer</option>
              <option value="IT-Senior">IT Senior</option>
              <option value="IT-jr">IT jr</option>
            </SelectComponent>

            <CheckboxComponent
              label="Terms and conditions"
              id="terms"
              name="terms"
            />

            <button type="submit">Crear</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstractPage;
