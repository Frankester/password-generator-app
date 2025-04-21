import { PropsWithChildren } from "react";
import './Button.css'

interface ButtonProps {
    disabled?: boolean,
    type: "submit" | "reset" | "button" | undefined
}
export default function Button({ disabled, type, children }: PropsWithChildren<ButtonProps>) {

    const calcStyles = disabled ? 'button-primary disabled' : 'button-primary'

    return (
        <button className={calcStyles} type={type}>
            {children}
        </button>
    )
}