import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menu = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'est', label: 'Estadísticas', icon: '📊' },
    { id: 'doc', label: 'Documentos', icon: '📁' },
    { id: 'aud', label: 'Auditoría', icon: '🛡️' }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 shadow-lg z-50">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#0054A6] rounded-xl flex items-center justify-center text-white font-black">A</div>
        <span className="text-[#0054A6] font-bold text-2xl tracking-tighter">AURA</span>
      </div>

      <nav className="flex-1 px-4 mt-6 space-y-2">
        {menu.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.id 
                ? 'bg-[#0054A6] text-white shadow-md' 
                : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-bold text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="p-6 border-t border-slate-50">
        <div className="text-[10px] font-black text-[#8DC63F] uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
          Sistema Activo
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;