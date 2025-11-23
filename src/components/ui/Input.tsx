import React from 'react';

interface InputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  required = false,
  disabled = false,
  className = '',
  onChange,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
      />
    </div>
  );
};

export default Input;
