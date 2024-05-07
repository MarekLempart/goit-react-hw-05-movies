// LoadingDots.jsx

import styles from './SharedLayout.module.css';

export const LoadingIndicator = () => {
  return (
    <div className={styles.loadingDots}>
      {' '}
      {/* Dodajemy klasę CSS */}
      <div className={styles.dot} style={{ animationDelay: '0s' }} />{' '}
      {/* Ustawiamy opóźnienie dla pierwszej kropki */}
      <div className={styles.dot} style={{ animationDelay: '.2s' }} />{' '}
      {/* Ustawiamy opóźnienie dla drugiej kropki */}
      <div className={styles.dot} style={{ animationDelay: '.4s' }} />{' '}
      {/* Ustawiamy opóźnienie dla trzeciej kropki */}
    </div>
  );
};
