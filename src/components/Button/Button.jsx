import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({
  selected = false,
  upBtn = false,
  loadMoreBtn = false,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.button, {
        [css.isFollowing]: selected,
      })}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
