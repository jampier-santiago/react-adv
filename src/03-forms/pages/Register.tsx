import "../styles/styles.css";
import { FormEvent } from "react";
import useForm from "../hooks/useForm";

const Register = () => {
  const { onChange, email, name, password, password2, reset, isValidEmail } =
    useForm({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email.trim()) && "has-error"}`}
        />
        {!isValidEmail(email.trim()) && <span>Email no es valido</span>}

        <input
          type="password"
          placeholder="Password 1"
          value={password}
          onChange={onChange}
          name="password"
          className={`${
            password.trim().length <= 0 &&
            password.trim().length < 6 &&
            "has-error"
          }`}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && (
          <span>La contraseña debe tener mas de 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
          name="password2"
          className={`${
            password2.trim().length <= 0 &&
            password === password2 &&
            "has-error"
          }`}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password2 !== password && (
          <span>Las contraseñas deben ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Register;
