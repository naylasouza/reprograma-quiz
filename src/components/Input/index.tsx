import React, { CSSProperties  } from "react"
import { TextField } from '@material-ui/core'

interface Props {
	label?: string
	helperText?: string
	style?: CSSProperties
	disabled?: boolean
	className?: string
	value?: string | number
}

const Input = ({ label, helperText, style,value, disabled, className}: Props): JSX.Element => {
	return (
		<TextField
			label={label}
			helperText={helperText}
			disabled={disabled}
			className={className}
			variant="filled"
			value={value}
		/>
	)
}
export default Input