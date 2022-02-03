import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  id?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const TextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={field.name} component="span" />
    </>
  );
};

export default TextInput;
