import { type ButtonProps } from '../../interfaces';

const Button = ({ 
  children, 
  size = 'medium', 
  shape = 'rounded-md', 
  onClick, 
  type = 'button',
  className = '' 
}: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const defaultColorClasses = 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800';
  
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${defaultColorClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
