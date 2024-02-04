import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children?: React.ReactNode;
  onClick?: () => void;
  color?: string
  textColor?: string
  variant: 'filled' | 'outlined'
  block?: boolean
}

function computeTailwindClasses(props: ButtonProps) {
  let baseClasses = "rounded-md px-4 py-2"
  if (props.variant === 'filled') {
    baseClasses += ` bg-${props.color} text-${props.textColor} hover:bg-darker-red`
  } else {
    baseClasses += ` border-dark-red border text-${props.color} hover:bg-dark-red hover:bg-opacity-5`
  }

  if (props.block) {
    baseClasses += ' w-full'
  }

  return baseClasses
}

export default function Button(props: ButtonProps) {
  const classes = computeTailwindClasses(props)
  const { children, onClick, color, textColor, variant, block, ...rest } = props

  return (
    <button {...rest} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}