import { type ButtonHTMLAttributes, type FC } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ThemeButton.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...other
  } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled
  }

  return (
      <button
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...other}
    >
          {children}
      </button>
  )
}
