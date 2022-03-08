/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties } from 'react'
import MomentUtils from '@date-io/moment'
import moment from 'moment'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'

interface Props {
  label: string
  value?: Date | null
  onChange: (date: any) => void
  style?: CSSProperties
  format?: string
  className?: string
}


const InputDate = ({
  label,
  value,
  onChange,
  style,
  className,
}: Props): JSX.Element => (
  <div className={className}>
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <KeyboardDatePicker
        autoOk
        disableToolbar
        variant="inline"
        inputVariant="filled"
        label={label}
        value={value}
        format={'MM/dd/yyyy'}
        onChange={onChange}
        style={style}
        InputAdornmentProps={{ position: 'start' }}
        className={"border"}
      />
    </MuiPickersUtilsProvider>
  </div>
)

export default InputDate
