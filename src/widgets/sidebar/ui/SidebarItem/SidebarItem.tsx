import { memo } from 'react'
import cls from './SidebarItem.module.scss'
import { Applink, ApplinkTheme } from 'shared/ui/AppLink/Applink'
import { type SidebarItemType } from 'widgets/sidebar/model/item'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed: boolean
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()

  return (
      <Applink
        theme={ApplinkTheme.SECONDARY}
        to={item!.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
          { item?.Icon && <item.Icon className={cls.icon} />}
          <span className={cls.link} >{t(item!.text)}</span>
      </Applink>
  )
})
