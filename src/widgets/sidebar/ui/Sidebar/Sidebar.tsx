import React, { memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItemList } from 'widgets/sidebar/model/item'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemList = useMemo(() => {
    return SidebarItemList.map((item) => (
        <SidebarItem item={item} key={item.path} collapsed={collapsed} />
    ))
  }, [collapsed])

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
              {itemList}
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
      </div>
  )
})
