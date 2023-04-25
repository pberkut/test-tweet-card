import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import css from './DropDownMenu.module.css';

const Dropdown = ({ options, value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  const handleOptionClick = option => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={css.container} ref={dropdownRef}>
      <button className={css.button} onClick={handleClick}>
        Select users to show:{' '}
        {options.find(option => option.value === value)?.label}
      </button>
      {isOpen && (
        <div className={css.wrapper}>
          {options.map(option => (
            <a
              className={css.option}
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export { Dropdown };
