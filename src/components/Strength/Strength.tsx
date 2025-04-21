import { useStrengthPassword } from "../../hooks"
import './Strength.css'

interface StrengthProps {
    password: string
}

export default function Strength({ password }: StrengthProps) {
    const { level } = useStrengthPassword(password)
    const titlesByLevel = ['', 'VERY LOW', 'LOW', 'MEDIUM', 'HIGH']
    const levelsClass = ['', 'low', 'medium', 'medium', 'high']

    return (
        <div className="strength">
            <p>{titlesByLevel[level]}</p>
            <div className="strength-items-wrapper">

                <div className={`strength-item ${levelsClass[level]}`}></div>
                <div className={`strength-item ${level > 1 ? levelsClass[level] : ''}`}></div>
                <div className={`strength-item ${level > 2 ? levelsClass[level] : ''}`}></div>
                <div className={`strength-item ${level > 3 ? levelsClass[level] : ''}`}></div>
            </div>
        </div>
    )
}