import { Formik, Form } from "formik";
import components from "../components";
import * as Yup from "yup";

import formJSON from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFiles: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (input.validations) {
    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required("Este campo es requerido");
      }

      if (rule.type === "minLength") {
        schema = schema.min(
          (rule as any).value,
          `Debe tener minimo ${(rule as any).value || 2} caracteres`
        );
      }

      if (rule.type === "email") {
        schema = schema.email("Debe tener un formato valido");
      }
    }

    requiredFiles[input.name] = schema;
  }
}

const validationSchema = Yup.object({ ...requiredFiles });

const { TextInput, SelectComponent } = components;

const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(data) => console.log(data)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJSON.map(({ label, name, type, placeholder, options }) => {
              if (type === "email" || type === "text") {
                return (
                  <TextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <SelectComponent key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.description}>
                        {opt.description}
                      </option>
                    ))}
                  </SelectComponent>
                );
              } else {
                return <span>Typo no soportaod</span>;
              }
            })}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
