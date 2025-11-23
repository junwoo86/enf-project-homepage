import React from 'react';

interface PhoneInputProps {
  id: string;
  label: string;
  value?: { part1: string; part2: string; part3: string };
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: { part1: string; part2: string; part3: string }) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  label,
  value = { part1: '', part2: '', part3: '' },
  required = false,
  disabled = false,
  className = '',
  onChange,
}) => {
  const handleChange = (part: 'part1' | 'part2' | 'part3', inputValue: string) => {
    const numericValue = inputValue.replace(/\D/g, '');
    onChange?.({ ...value, [part]: numericValue });
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="tel"
          id={`${id}-1`}
          value={value.part1}
          onChange={(e) => handleChange('part1', e.target.value)}
          maxLength={3}
          disabled={disabled}
          className="w-20 px-3 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-center"
        />
        <span className="text-gray-400">-</span>
        <input
          type="tel"
          id={`${id}-2`}
          value={value.part2}
          onChange={(e) => handleChange('part2', e.target.value)}
          maxLength={4}
          disabled={disabled}
          className="w-24 px-3 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-center"
        />
        <span className="text-gray-400">-</span>
        <input
          type="tel"
          id={`${id}-3`}
          value={value.part3}
          onChange={(e) => handleChange('part3', e.target.value)}
          maxLength={4}
          disabled={disabled}
          className="w-24 px-3 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-center"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
