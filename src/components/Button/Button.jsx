import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ selected = false, children, ...otherProps }) => {
  return (
    <button
      className={clsx(css.button, { [css.isSelected]: selected })}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
