import React from "react"
import Button from "../../components/Button"
import Card from '../../components/Card'
import Input from "../../components/Input"
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select
} from '@material-ui/core'
import './style.scss'
import Date from "../../components/Date"
import Logo from "../../Icons/AvatarEmpty"

interface Props {
  photo?: string
}

const Login = ({photo}: Props): JSX.Element => {
	return (
		<div  className=" container-grid">
			<Card className="container-login ">
				<Logo />
				<Input
					label="Nome completo"
					className="border margin-top-20"
				/>

				<div className="border margin-left-zero margin-top-10 muiInputLabel-genre">
					<FormControl fullWidth>
						<InputLabel >Identidade de gênero</InputLabel>
						<Select>
							<MenuItem value={10}>Mulher Cis</MenuItem>
							<MenuItem value={20}>Mulher Trans</MenuItem>
							<MenuItem value={30}>Prefiro não responder</MenuItem>
						</Select>
					</FormControl>
				</div>
				<Date
					label="Data de nascimento"
					value={ null}
					onChange={e => ('funcaovazia')}
					className="border margin-left-zero margin-top-10"
				/>
				<Button text={"Próximo"} className='margin-card'/>
			</Card>

		</div>
	)
}
export default Login