import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      onLogin({ email }); 
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>AURA</h2>
          <p>Gestión Inteligente FOSCAL</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>CORREO INSTITUCIONAL</label>
            <div className="input-wrapper">
              <input 
                type="email" 
                placeholder="usuario@foscal.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>CONTRASEÑA</label>
            <div className="input-wrapper">
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-btn">
            INGRESAR AL SISTEMA
          </button>
        </form>

        <div className="login-footer">
          <p>¿Olvidaste tu acceso? <a href="#">Contactar a Soporte</a></p>
          <small>© 2026 AURA - Tecnología para la salud</small>
        </div>
      </div>
    </div>
  );
};

export default Login;