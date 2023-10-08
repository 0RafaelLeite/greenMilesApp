import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div id="loginBox">
      <h1>Green Miles</h1>
      <form onSubmit={handleSubmit}>
        <div className='loginInput'>
          <label htmlFor="username">E-mail ou telefone:<br></br></label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className='loginInput'>
          <label htmlFor="password">Senha:<br></br></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <h2>Esqueceu a senha?</h2>
        <button id ="login" type="submit">Login</button>
        <button id ="cadastre-se" type="submit">Cadastre-se</button>
      </form>
    </div>
  );
}

export default Login;
