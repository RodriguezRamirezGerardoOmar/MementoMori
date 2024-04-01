import React from 'react'
import cn from 'classnames'

const HeaderMenu = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#25319F' }}>
      <img src="/images/Logo.png" alt="Logo" style={{ height: '50px' }} />
      <h1 style={{ margin: '0' }}>MicroGestor</h1>
      <div style={{ position: 'relative' }}>
        <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '16px', fontSize: '16px', border: 'none', cursor: 'pointer' }}>
          Menú
        </button>
        <div style={{ display: 'none', position: 'absolute', backgroundColor: '#f9f9f9', minWidth: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }}>
          <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block', textAlign: 'left' }}>Enlace 1</a>
          <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block', textAlign: 'left' }}>Enlace 2</a>
          <a href="#" style={{ color: 'black', padding: '12px 16px', textDecoration: 'none', display: 'block', textAlign: 'left' }}>Enlace 3</a>
        </div>
      </div>
    </header>
  )
}

export default HeaderMenu