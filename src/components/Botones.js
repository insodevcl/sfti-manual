import React from 'react';

export default function Boton({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '4px',
        color: '#fff',
        textAlign: 'center',
        padding: '0 1em',
        margin: '0.1em',

      }}>
      {children}
    </span>
  );
}