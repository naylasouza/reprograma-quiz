import react from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './style.scss'

const Home = (): JSX.Element => {
    return (
        <div className='container'>
            <p className='paragrapher'>Seja bem-vinda à {'{reprograma - quiz}'} </p>
            <p className='sub-paragrapher'>Tá na duvida em qual bootcamp escolher? Fique tranquila, este quiz tem o objetivo de auxiliar mulheres cis e trans a encontrarem o curso ideal com base em seu perfil.</p>
            <div className='container-future'>
                <p className='future'>Descubra seu futuro!!!</p>
                <Link to={'/Login'}>
                <Button text='Login'  className='text-btn' />
                </Link>
                
            </div>
        </div>
    )
}
export default Home
