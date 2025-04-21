import { ReactElement } from "react"
import { Control, useController } from "react-hook-form"
import '../../App.css' //for class names
import { PasswordSettingsType } from "../../models"

interface InputProps {
    control: Control<PasswordSettingsType>,
    type: string,
    name: keyof PasswordSettingsType,
    label: ReactElement,
    className?: string
}

export default function Input({ control, type, name, label, className }: InputProps) {
    const { field } = useController({ control, name })
    return (
        <>

            <input
                className={className}
                id={name}
                type={type}
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={`${field.value}`}
                name={field.name}
                ref={field.ref}
            />
            <label className={name} htmlFor={name}>
                {label}
            </label>
        </>
    )
}