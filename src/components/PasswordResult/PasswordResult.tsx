import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { error_result } from "../../utils/constants"
import { faCopy } from "@fortawesome/free-regular-svg-icons"

import './PasswordResult.css'
import { useState } from "react"
import Tooltip from "../Tooltip/Tooltip"

interface PasswordResultProps {
    result: string,
    placeholder: string
}

export default function PasswordResult({ result, placeholder }: PasswordResultProps) {
    const calcStyles = result === "" || result === error_result ? 'password disabled' : 'password'
    const [tooltipText, setTooltipText] = useState("Copy")

    const handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(result)

        // tooltip for the user
        setTooltipText("Copied!")
        setTimeout(() => {
            setTooltipText("Copy")
        }, 1000)
    }

    return (
        <div className={calcStyles}>
            {result ? <p className='password-result'>{result}</p> : placeholder}
            <Tooltip tooltipText={tooltipText}>
                <FontAwesomeIcon icon={faCopy} onClick={handleCopyToClipBoard} />
            </Tooltip>
        </div>
    )
}