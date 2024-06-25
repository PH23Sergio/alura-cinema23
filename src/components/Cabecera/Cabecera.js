import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import styles from './Cabecera.module.css'; // Asegúrate de importar tus estilos CSS correctamente
import logo from './logo-alura.png'; // Asegúrate de importar la ruta correcta a tu logo

// Definición de CabeceraLink si es necesario
const CabeceraLink = ({ url, children }) => (
  <Link to={url} className={styles.enlace}>
    {children}
  </Link>
);

function Cabecera() {
  return (
    <header className={styles.cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="Logo Alura" /> <span>Cinema</span>
        </section>
      </Link>
      <nav>
        <CabeceraLink url="./">
          Home
        </CabeceraLink>
        <CabeceraLink url="./Favoritos">
          Favoritos
        </CabeceraLink>
      </nav>
    </header>
  );
}

export default Cabecera;

