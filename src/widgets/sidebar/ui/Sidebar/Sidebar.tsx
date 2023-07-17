import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { Applink, ApplinkTheme } from 'shared/ui/AppLink/Applink'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
  className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
      <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className!
      ])}
      data-testid="Sidebar"
    >
          <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={cls.collapsedBtn}
        square
        size={ButtonSize.L}
      >
              {collapsed ? '>' : '<'}
          </Button>
          <div className={cls.items}>
              <div className={cls.item}>
                  <Applink theme={ApplinkTheme.SECONDARY} to={'/'}>
                      <MainIcon className={cls.icon} />
                      <span className={cls.link} >Главная</span>
                  </Applink>
              </div>
              <div className={cls.item}>
                  <Applink
                    theme={ApplinkTheme.SECONDARY}
                    to={'/about'}
                    >
                      <AboutIcon className={cls.icon} />
                      <span className={cls.link} >О сайте</span>
                  </Applink>
              </div>
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
      </div>
  )
}
