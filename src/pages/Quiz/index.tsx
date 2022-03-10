import React from "react"
import Card from "../../components/Card"
import { FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@material-ui/core'
import './style.scss'
import Button from "../../components/Button"


const Quiz = (): JSX.Element => {
	const questions = [
		{
			questionTitle: 'Prefiro fotografar lugares do que ler livros',
			options:[
					{text: 'SIM'},
					{text: 'NÃO'},
					{text: 'OS DOIS/NENHUM DOS DOIS'},
			],
		},
		{
			questionTitle: 'Acho melhor aplicativos/sites que sejam Lindos do que Rápido',
			options:[
					{text: 'SIM'},
					{text: 'NÃO'},
					{text: 'IGUALMENTE IMPORTANTES'},
			],
		},
		{
			questionTitle: 'Me enxergo mais como artista do que como uma engenheira',
			options:[
					{text: 'SIM'},
					{text: 'NÃO'},
					{text: 'OS DOIS/NENHUM DOS DOIS'},
			],
		},
		{
			questionTitle: 'Me apego tanto aos detalhes que às vezes demoro muito pra fazer minhas atividade',
			options:[
					{text: 'SIM'},
					{text: 'NÃO'},
			],
		},
		{
			questionTitle: 'Prefiro História ou Ciências a Matemática ou Química',
			options:[
					{text: 'SIM'},
					{text: 'NÃO'},
					{text: 'PREFIRO IGUALMENTE TODAS'},
			],
		},
	]


	return (
		<div className=" container-grid">
			<Card  >
					<p className="question">{questions[0].questionTitle}</p>
				<div >
					<FormControl>
						<RadioGroup>
						{questions[0].options.map(({ text, text: radioLabel }) => (
							<FormControlLabel 
								className="question" 
								value={text} 
								control={<Radio />} 
								label={radioLabel} />
						))}
						<Button text={"Proxima questao"} />
							
						</RadioGroup>
					</FormControl>
				</div>
			</Card>
		</div>
	)
}
export default Quiz