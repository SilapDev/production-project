// helpers
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Navbar.module.scss'

interface Props {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  return (
      <div className={classNames(cls.Navbar, {})}>
          <div className={cls.links}>
              /
          </div>
      </div>
  )
}
