import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";
import { Theme } from "app/providers/ThemeProvider";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...other } = props;

  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...other}>
      {children}
    </button>
  );
};