import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

const Button = ({
  onClick,
  disabled = false,
  variant = 'secondary',
  size = 'md',
  isActive = false,
  className = '',
  startIcon,
  endIcon,
  children
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2 text-base'
  };

  const variantClasses = {
    primary: 'bg-[var(--color-btn-primary-bg)] hover:bg-[var(--color-btn-primary-hover)] text-[var(--color-btn-primary-text)] font-semibold',
    secondary: isActive
      ? 'bg-[var(--color-btn-secondary-active-bg)] text-[var(--color-btn-secondary-active-text)]'
      : 'bg-[var(--color-btn-secondary-bg)] text-[var(--color-btn-secondary-text)] border border-[var(--color-border)] hover:bg-[var(--color-btn-secondary-hover)] font-semibold',
    ghost: isActive
      ? 'bg-[var(--color-btn-secondary-active-bg)] text-[var(--color-btn-secondary-active-text)]'
      : 'bg-[var(--color-btn-secondary-bg)] border border-[var(--color-border)] text-[var(--color-btn-secondary-text)] hover:bg-[var(--color-btn-secondary-hover)]'
  };

  const baseClasses = `leading-[18px] flex items-center justify-center gap-0.5 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      <span className='mt-0.5'>
        {startIcon && startIcon}
      </span>
      {children}
      <span className='mt-0.5'>
        {endIcon && endIcon}
      </span>
    </button>
  );
};

export default Button;
