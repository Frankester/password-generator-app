import './Tooltip.css';

interface TooltipProps {
    tooltipText: string,
    children: React.ReactNode
}

export default function Tooltip({ tooltipText, children }: TooltipProps) {

    return (
        <div className="tooltip-wrapper">
            <span className="tooltip">{tooltipText}</span>
            {children}
        </div>
    )
}