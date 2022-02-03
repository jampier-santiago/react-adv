import { useField, ErrorMessage } from "formik";

interface Props {
  label?: string;
  name: string;
  id?: string;
  [x: string]: any;
}

const CheckboxComponent = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="checkbox" {...field} {...props} />
      <ErrorMessage name={field.name} component="span" />
    </>
  );
};

export default CheckboxComponent;
