import React from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAling {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAling
}
export const Text = (props: TextProps) => {
  const {
    className = '',
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAling.LEFT
  } = props

  const mods: Mods = {
    [cls[align]]: true
  }

  return (
      <div className={classNames(cls.Text, mods, [className, theme])}>
          {title && <p className={cls.title}>{title}</p>}
          {text && <p className={cls.text}>{text}</p>}
      </div>
  )
}
