import React from 'react';

interface TextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  placeholder = '',
  value,
  rows = 4,
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
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        rows={rows}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
      />
    </div>
  );
};

export default TextArea;
