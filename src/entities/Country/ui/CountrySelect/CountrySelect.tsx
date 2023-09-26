import { Country } from "entities/Country/model/types/Country";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next"
import { Select } from "shared/ui/Select/Select"


interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
]


export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {


    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {

        onChange?.(value as Country)

    }, [onChange])

    return (
        <Select

            label={t("Select Country")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    )

})