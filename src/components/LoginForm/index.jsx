import styles from "./styles.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usuario from "../../data/usuario.json";
import {AuthContext} from '../../contexts/AuthContext'

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { initials, initialsUser } = useContext(AuthContext)

  const displayErrorMessage = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validateEmail = (email) => {
      const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
      const isValid = emailPattern.test(email);
      const emailInput = document.getElementById("email");

      emailInput.setCustomValidity(
        !isValid ? "Preencha com um e-mail válido" : ""
      );
      emailInput.reportValidity();

      return isValid;
    };

    const validatePassword = (password) => {
      const minLength = 6;
      const isValid = password.length >= minLength;
      const passwordInput = document.getElementById("password");

      passwordInput.setCustomValidity(
        !isValid ? "A senha deve conter pelo menos 6 caracteres" : ""
      );
      passwordInput.reportValidity();

      return isValid;
    };

    const clearForm = () => {
      setEmail("");
      setPassword("");
    };
    //inserir try catch / post aqui
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    emailValid && passwordValid
      ? email === usuario[0].email && password === usuario[0].password
        // ? (localStorage.setItem("@project_name", "Test User"), navigate("/home"))
        ? (initialsUser(),  navigate("/home"))
        : (clearForm(),
          displayErrorMessage(
            "Por favor, tente novamente, suas credenciais são inválidas"
          ))
      : null;
  };

  return (
    <form className={styles.containerLoginForm}>
      <ToastContainer />
      <h1>Iniciar sessão</h1>
      <label>
        E-mail
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        className={styles.submitLoginButton}
        type="submit"
        onClick={handleFormSubmit}
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
