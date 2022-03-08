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



const Login = (): JSX.Element => {
	return (
		<div >
			<Card className="container-login">
				<Input
					label="Nome completo"
					className="border"
				/>

				<div className="border">
					<FormControl fullWidth>
						<InputLabel >Identidade de gênero</InputLabel>
						<Select>
							<MenuItem value={10}>Mulher Cis</MenuItem>
							<MenuItem value={20}>Mulher Trans</MenuItem>
							<MenuItem value={30}>Prefiro não responder</MenuItem>
						</Select>
					</FormControl>
				</div>

				{/* Data */}
				<Date
					label="Data de nascimento"
					value={ null}
					onChange={e => ('funcaovazia')}
					className="border"
				/>
				<Button text={"Próximo"} />
			</Card>

		</div>
	)
}
export default Login