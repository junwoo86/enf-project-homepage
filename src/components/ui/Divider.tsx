import React from 'react';

interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({
  className = '',
  orientation = 'horizontal',
}) => {
  if (orientation === 'vertical') {
    return <div className={`w-px bg-gray-200 h-full ${className}`} />;
  }

  return <hr className={`border-t border-gray-200 w-full ${className}`} />;
};

export default Divider;
