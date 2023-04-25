import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ isFollowing = false, children, ...otherProps }) => {
  return (
    <button
      className={clsx(css.button, {
        [css.isFollowing]: isFollowing,
      })}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
