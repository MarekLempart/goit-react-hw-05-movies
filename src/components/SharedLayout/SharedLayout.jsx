// SharedLayout.jsx

import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LoadingIndicator } from './LoadingDots';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        {' '}
        {/* Dodajemy klasę CSS */}
        <nav>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styles.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
