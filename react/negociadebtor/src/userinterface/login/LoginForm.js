import React, { useState } from "react";
import './Forms.css'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    if (!email) {
      setError("Email es un campo requerido");
    } else if (!password) {
      setError("La contraseña es un campo requerido");
    } else if (!passwordRegex.test(password)) {
      setError("La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un caracter especial");
    } else {
      setError("");
      // aquí podrías enviar los datos a un API para verificar si el usuario existe y si la contraseña es válida
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="group-form">
        <h2>Inicia y Negocia</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;