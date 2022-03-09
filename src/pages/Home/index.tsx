import react from 'react'
import { useHistory } from 'react-router-dom'
import Input from "../../components/Input"
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select
} from '@material-ui/core'
import './style.scss'
import Date from "../../components/Date"
import Button from '../../components/Button'
import './style.scss'

const Home = (): JSX.Element => {
	const history = useHistory()
	
    return (
        <div className='container'>
            <p className='paragrapher'>Seja bem-vinda à {'{reprograma - quiz}'} </p>
            <p className='sub-paragrapher'>Tá na duvida em qual bootcamp escolher? Fique tranquila, este quiz tem o objetivo de auxiliar mulheres cis e trans a encontrarem o curso ideal com base em seu perfil.</p>
            <div className='container-future'>
                <p className='future'>Descubra seu futuro!!!</p>
                <div className="selects-date margin-left-zero margin-top-10 muiInputLabel-genre border-solid">
					<FormControl fullWidth>
						<InputLabel >Qual a sua identidade de gênero</InputLabel>
						<Select>
							<MenuItem value={10}>Mulher Cis</MenuItem>
							<MenuItem value={20}>Mulher Trans</MenuItem>
							<MenuItem value={30}>Prefiro não responder</MenuItem>
						</Select>
					</FormControl>
				</div>
                <Date
					label="Data de nascimento"
					value={null}
					onChange={e => ('funcaovazia')}
					className=" selects-date margin-left-zero margin-top-10 border-solid"
				/>
				
                <Button 
					text='Próximo'  
					className='text-btn btn-margin'
					onClick={() => history.push('/login')}
				/>
            </div>
        </div>
    )
}
export default Home
