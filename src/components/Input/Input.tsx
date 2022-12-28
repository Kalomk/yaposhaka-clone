import { useState, useEffect, useRef } from 'react';
import './Input.scss';

const Input = ({ name, title, type }) => {
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (document.hasFocus() && ref.current && ref.current.contains(document.activeElement)) {
      setFocus(true);
    }
  }, []);
  return (
    <div
      className={focus ? 'hoshi-wrap addon hoshi-inited focus' : 'hoshi-wrap addon hoshi-inited'}
    >
      <input
        ref={ref}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        title={title}
        className="hoshi-input"
        type={type}
      />
      <label className="hoshi-label" htmlFor={name}>
        {title}
      </label>
    </div>
  );
};
export default Input;
