import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Applink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum ApplinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ApplinkProps extends LinkProps {
  className?: string
  theme?: ApplinkTheme
}
export const Applink: FC<ApplinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = ApplinkTheme.PRIMARY,
    ...other
  } = props

  return (
      <Link
      to={to}
      className={classNames(cls.Applink, {}, [className!, cls[theme]])}
      {...other}
    >
          {children}
      </Link>
  )
}
