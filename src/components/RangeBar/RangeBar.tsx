import { Control, useController } from "react-hook-form";
import { PasswordSettingsType } from "../../models";

interface RangeBarProps {
    control: Control<PasswordSettingsType>,
    lenght: number,
    changeLength: (lengh: number) => void
}

export default function RangeBar({ control, lenght, changeLength }: RangeBarProps) {
    const { field } = useController({ control, name: "length" })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const progress = e.target
        progress.style.setProperty('--val', progress.value) // add --val for css calcs
        changeLength(Number(e.target.value))
    }

    return (
        <>
            <label className="length" htmlFor="length">
                Character Length <div className='length-size'>{lenght}</div>
            </label>
            <input
                className="length-bar"
                id="length"
                type="range"
                min={0}
                max={20}
                {...field}
                onChange={(e) => {
                    field.onChange(e)
                    handleOnChange(e)
                }}
            />
        </>
    )
}