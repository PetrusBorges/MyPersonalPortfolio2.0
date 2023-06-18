import { FC } from 'react'

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  disabled = false,
  onClick,
  children
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='w-full py-2 rounded-lg border-t-2 disabled:bg-neutral-600 disabled:border-neutral-500 disabled:cursor-not-allowed bg-blue-600 border-blue-500'
    >
      {children}
    </button>
  )
}

export default Button