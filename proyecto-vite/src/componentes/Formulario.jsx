import { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');

  const [correo, setCorreo] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensaje(`Gracias , ${nombre.toUpperCase()} , por registrar tus comentarios. ¡ Te contactaremos pronto !`);
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <br />
        <label>
          Correo:
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </label>
        <br />
        <label>
          Comentarios:
          <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Formulario;
