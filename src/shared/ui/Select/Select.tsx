import React, { ChangeEvent, memo, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from "./Select.module.scss"

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string;
    label?: string
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {

    const mods: Mods = {

    }

    const optionsList = useMemo(() => {

        return options?.map((opt) => {
            <option
                className={cls.option} value={opt.value} key={opt.value} >
                {opt.content}
            </option>
        })

    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {


        onChange?.(e.target.value)
    }


    return (
        <div className={classNames(cls.Wrapper, mods, [className])} >
            {label && <span className={cls.label} >
                {label + ">"}
            </span>}

            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler} >
                {optionsList}
            </select>

        </div>
    )
})
