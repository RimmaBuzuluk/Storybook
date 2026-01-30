import React, { useState } from 'react';
import './Input.css';

type InputProps = {
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  clearable?: boolean;
  onChange?: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  onChange,
  clearable = false,
}) => {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState('');



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const inputClear = () => {
    setInputValue('');
    onChange?.('');
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <div className="input-wrapper">
      <input
        className="input-field"
        type={isPassword && showPassword ? 'text' : type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />

      {clearable && inputValue && (
        <button
          type="button"
          className="input-button clear-button"
          onClick={inputClear}
        >
          ❌
        </button>
      )}

      {isPassword && (
        <button
          type="button"
          className="input-button password-toggle"
          onClick={togglePassword}
        >
          👁
        </button>
      )}
    </div>
  );
};
