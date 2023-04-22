import css from './Container.module.css';

const Container = ({ children }) => {
  return (
    <div>
      <div className={css.container}>{children}</div>
    </div>
  );
};

export { Container };
