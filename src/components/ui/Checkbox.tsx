import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  hasInput?: boolean;
  inputValue?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
  onInputChange?: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  disabled = false,
  hasInput = false,
  inputValue = '',
  className = '',
  onChange,
  onInputChange,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-4 h-4 border border-gray-300 rounded focus:ring-black accent-black cursor-pointer"
      />
      <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer flex items-center gap-2">
        {label}
        {hasInput && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange?.(e.target.value)}
            placeholder="직접입력"
            className="ml-2 px-2 py-1 border border-gray-300 text-sm focus:border-black focus:outline-none"
          />
        )}
      </label>
    </div>
  );
};

export default Checkbox;
