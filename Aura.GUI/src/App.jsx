import React, { useState } from 'react';
import './index.css';
import Login from './auth/Login.jsx'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [tab, setTab] = useState('inicio');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogin = (data) => {
    setUserData(data); 
    setIsLoading(true); 
    
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 2500); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setIsUserMenuOpen(false); 
    setTab('inicio'); 
  };

  if (isLoading) {
    return (
      <div className="aura-loader-container">
        <div className="aura-loader-content">
          <div className="aura-logo-animated">AURA</div>
          <h2 className="aura-welcome-text">Bienvenido...</h2>
          <div className="aura-progress-bar">
            <div className="aura-progress-fill"></div>
          </div>
          <p className="aura-loading-sub">Sincronizando con sistemas FOSCAL...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  const currentUserName = userData?.email ? userData.email.split('@')[0] : 'Usuario';

  return (
    <div className={`app-container ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
      
      <aside className="sidebar">
        <button 
          className="toggle-sidebar-btn" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? '❮' : '❯'}
        </button>

        <div className="sidebar-content">
          <div className="brand-section">
            <div className="brand-logo">AURA</div>
            <div className="brand-subtitle">FOSCAL 2026</div>
          </div>

          <nav className="nav-menu">
            <button className={`nav-item ${tab === 'inicio' ? 'active' : ''}`} onClick={() => setTab('inicio')}>
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Inicio</span>
            </button>
            <button className={`nav-item ${tab === 'est' ? 'active' : ''}`} onClick={() => setTab('est')}>
              <span className="nav-icon">📊</span>
              <span className="nav-text">Tutelas</span>
            </button>
            <button className={`nav-item ${tab === 'aud' ? 'active' : ''}`} onClick={() => setTab('aud')}>
              <span className="nav-icon">🛡️</span>
              <span className="nav-text">Auditoría</span>
            </button>
          </nav>
        </div>
      </aside>

      <main className="main-view">
        <div className="user-section-wrapper">
          <div 
            className={`user-profile-banner ${isUserMenuOpen ? 'banner-active' : ''}`} 
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <div className="avatar-container">
              <div className="avatar-circle">
                {currentUserName[0].toUpperCase()}
              </div>
              <span className="online-indicator"></span>
            </div>
            <div className="user-details">
              <span className="user-name-text">
                {currentUserName}
              </span>
              <span className="user-role-badge">ADMINISTRADOR</span>
            </div>
            <span className={`arrow-icon ${isUserMenuOpen ? 'rotate' : ''}`}>▼</span>
          </div>

          {isUserMenuOpen && (
            <div className="user-dropdown">
              <div className="dropdown-header">Mi Cuenta</div>
              <button className="dropdown-item"> Configuración</button>
              <button className="dropdown-item logout-btn" onClick={handleLogout}>
                 Cerrar Sesión
              </button>
            </div>
          )}
        </div>

        <header className="user-header">
          <div className="welcome-badge">
            <span className="welcome-tag">Bienvenido al sistema,</span>
            <h1 className="main-title">
              {currentUserName}
            </h1>
          </div>
        </header>

        <div className="dashboard-grid">
          <div className="aura-card card-blue">
            <span className="card-icon">📊</span>
            <h3>Estadísticas Orion</h3>
            <p>Análisis operativo y visualización de datos con precisión AURA.</p>
          </div>

          <div className="aura-card card-green">
            <span className="card-icon">📁</span>
            <h3>Gestión Documental</h3>
            <p>Control total y archivo centralizado de registros digitales.</p>
          </div>

          <div className="aura-card card-orange">
            <span className="card-icon">🛡️</span>
            <h3>Auditoría de Acceso</h3>
            <p>Seguimiento detallado de logs y protocolos de seguridad.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;