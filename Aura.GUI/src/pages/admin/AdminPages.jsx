import React, { useState, useEffect } from 'react';
import './AdminPages.css';
import AdminDialogo from './AdminDialogo';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const ENDPOINT_USUARIOS = `${API_BASE_URL}/admin/usuarios`;

const AdminPages = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return console.error("No hay token en el storage");

      const response = await fetch(ENDPOINT_USUARIOS, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUsuarios(data);
      }
    } catch (error) {
      console.error("Error cargando usuarios:", error);
    } finally {
      setCargando(false);
    }
  };

  const handleGuardarUsuario = async (datosFormulario) => {
    const token = localStorage.getItem('token');
    const url = usuarioEditando 
      ? `${ENDPOINT_USUARIOS}/${usuarioEditando._id}` 
      : ENDPOINT_USUARIOS;

    try {
      const response = await fetch(url, {
        method: usuarioEditando ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: datosFormulario.nombre,
          email: datosFormulario.email,
          role: datosFormulario.rol,
          permisos: datosFormulario.permisos
        })
      });

      if (response.ok) {
        await fetchUsuarios();
        setIsModalOpen(false);
        setUsuarioEditando(null);
      } else {
        const error = await response.json();
        alert(error.message || "Error al guardar");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <div className="admin-page-container">
      <header className="admin-page-header">
        <h2 className="admin-title">Gestión de Usuarios</h2>
        <button className="aura-btn-add" onClick={() => { setUsuarioEditando(null); setIsModalOpen(true); }}>
          + Nuevo Acceso
        </button>
      </header>

      <div className="aura-table-container">
        {cargando ? <p>Cargando datos AURA...</p> : (
          <table className="aura-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td><span className={`badge-role ${u.role?.toLowerCase()}`}>{u.role}</span></td>
                  <td className="actions-cell">
                    <button className="action-btn edit" onClick={() => { setUsuarioEditando(u); setIsModalOpen(true); }}>✏️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <AdminDialogo 
        key={isModalOpen ? (usuarioEditando?._id || 'nuevo') : 'closed'}
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setUsuarioEditando(null); }} 
        onGuardar={handleGuardarUsuario} 
        usuarioParaEditar={usuarioEditando} 
      />
    </div>
  );
};

export default AdminPages;