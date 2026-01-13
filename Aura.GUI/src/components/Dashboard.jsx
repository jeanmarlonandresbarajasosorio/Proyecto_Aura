import React from 'react';

const Dashboard = () => {
  const modules = [
    { title: 'Estadísticas Orion', color: '#0054A6', icon: '📊', bg: '#EBF5FF' },
    { title: 'Gestión Documental', color: '#8DC63F', icon: '📁', bg: '#F3FAF0' },
    { title: 'Auditoría de Acceso', color: '#F7941E', icon: '🛡️', bg: '#FFF8F1' }
  ];

  return (
    <div style={{ padding: '60px' }}>
      <header style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ color: '#94a3b8', fontWeight: 300, fontStyle: 'italic', fontSize: '2rem', margin: 0 }}>Buenos días,</h2>
          <h1 style={{ color: '#0f172a', fontWeight: 900, fontSize: '3.5rem', letterSpacing: '-2px', margin: 0 }}>Jean Marlon</h1>
        </div>
        
        <div className="user-badge" style={{ background: 'white', padding: '10px 30px', borderRadius: '25px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '15px' }}>
           <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '10px', fontWeight: 900, color: '#94a3b8', margin: 0 }}>PRIVILEGIOS</p>
              <p style={{ fontSize: '14px', fontWeight: 900, color: '#0054A6', margin: 0 }}>ADMINISTRADOR</p>
           </div>
           <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#0054A6', color: 'white', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JM</div>
        </div>
      </header>

      <div className="dashboard-grid">
        {modules.map((m) => (
          <div key={m.title} className="card">
            <div className="icon-box" style={{ backgroundColor: m.bg, color: m.color }}>
              {m.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>{m.title}</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '30px' }}>
              Administre los procesos institucionales con la precisión y serenidad de AURA.
            </p>
            <div style={{ color: m.color, fontWeight: 900, fontSize: '10px', letterSpacing: '2px' }}>ACCEDER MÓDULO →</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;