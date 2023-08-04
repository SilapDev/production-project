import { CSSProperties, useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Avatar.module.scss"


interface AvatarProps {
    className?: string
    src?: string
    size?: string
}

export const Avatar = ({ className, src, size }: AvatarProps) => {

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        }
    }, [size])


    return (
        <img src={src} style={styles} className={classNames(cls.Avatar, {}, [className])} />
    )

}