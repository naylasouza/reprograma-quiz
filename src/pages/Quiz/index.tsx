import React, { useState } from "react"
import Card from "../../components/Card"
import { FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@material-ui/core'
import './style.scss'
import Button from "../../components/Button"


const Quiz = (): JSX.Element => {


	const questions = [
		{
			questionTitle: 'Prefiro fotografar lugares do que ler livros.',
			options: [
				{ text: 'SIM', pontos: 10 },
				{ text: 'NÃO', pontos: -10 },
				{ text: 'OS DOIS/NENHUM DOS DOIS', pontos: 0 },
			],
		},
		{
			questionTitle: 'Acho melhor aplicativos/sites que sejam Lindos do que Rápido.',
			options: [
				{ text: 'SIM', pontos: 10 },
				{ text: 'NÃO', pontos: -10 },
				{ text: 'IGUALMENTE IMPORTANTES', pontos: 0 },
			],
		},
		{
			questionTitle: 'Me enxergo mais como artista do que como uma engenheira.',
			options: [
				{ text: 'SIM', pontos: 10 },
				{ text: 'NÃO', pontos: -10 },
				{ text: 'OS DOIS/NENHUM DOS DOIS', pontos: 0 },
			],
		},
		{
			questionTitle: 'Me apego tanto aos detalhes que às vezes demoro muito pra fazer minhas atividade.',
			options: [
				{ text: 'SIM', pontos: 10 },
				{ text: 'NÃO', pontos: -10 },
			],
		},
		{
			questionTitle: 'Prefiro História ou Ciências a Matemática ou Química.',
			options: [
				{ text: 'SIM', pontos: 10 },
				{ text: 'NÃO', pontos: -10 },
				{ text: 'PREFIRO IGUALMENTE TODAS', pontos: 0 },
			],
		},
	]
	const [currentQuestion, setCurrentQuestion] = useState(0)

	const handleButton = () => {
		// if(pontos === 10){
		// 	alert('frontt');
		// }


		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert("ACABBBBBBBOOOUUUUU ")
		}

	}

	return (
		<div className=" container-grid">
			<Card className=""  >
				<p className="question">{questions[currentQuestion].questionTitle}</p>
				<div className="line-divider" />
				<div className="icon-button">
					<FormControl >
						<RadioGroup>
							{questions[currentQuestion].options.map(({ text, text: radioLabel }) => (
								<FormControlLabel
									className="icon-radio"
									value={text}
									control={<Radio />}
									label={radioLabel} />
							))}
						</RadioGroup>
					</FormControl>
				</div>
				<div className="margin-30">
				<Button 
				  text={"Próxima questão"} 
				  onClick={handleButton} 
				/>
				</div>
				
			</Card>
		</div>
	)
}
export default Quiz