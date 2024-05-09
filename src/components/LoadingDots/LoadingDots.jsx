// LoadingDots.jsx

import css from './LoadingDots.module.css';

export const LoadingIndicator = () => {
  return (
    <div className={css.loadingDots}>
      {' '}
      {/* Dodajemy klasę CSS */}
      <div className={css.dot} style={{ animationDelay: '0s' }} />{' '}
      {/* Ustawiamy opóźnienie dla pierwszej kropki */}
      <div className={css.dot} style={{ animationDelay: '.2s' }} />{' '}
      {/* Ustawiamy opóźnienie dla drugiej kropki */}
      <div className={css.dot} style={{ animationDelay: '.4s' }} />{' '}
      {/* Ustawiamy opóźnienie dla trzeciej kropki */}
    </div>
  );
};
