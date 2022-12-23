import React, { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren & {
    type?: 'primary' | 'secondary'
    disabled?: boolean
    loading?: boolean
    className?: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    type = 'primary',
    disabled,
    loading,
    className,
    children,
    onClick
}) => {
    const classes = ["pgn-button", className]
    if (type === "secondary") classes.push("secondary")
    if (disabled || loading) classes.push("disabled")

    return (
        <button
            type='button'
            className={classes.join(" ")}
            disabled={disabled || loading}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button