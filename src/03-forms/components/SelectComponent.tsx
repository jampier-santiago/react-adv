import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  id?: string;
  [x: string]: any;
}

const SelectComponent = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={field.name} component="span" />
    </>
  );
};

export default SelectComponent;
