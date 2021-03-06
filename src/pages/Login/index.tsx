import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import Button from "../../components/Button"
import Card from '../../components/Card'
import './style.scss'
import Logo from "../../Icons/AvatarEmpty"
import axios from "axios"
import Input from "../../components/Input"

interface Props {
	photo?: string
}

const Login = ({ photo }: Props): JSX.Element => {
	const history = useHistory()
	const [userData, setUserData] = useState()

	const onClicke = () => {
		// Uso do try catch para tentar um tratativo do erro que esta ocorrendo
		try{
			axios.get('https://randomuser.me/api/')
			.then((response) => {
				setUserData(response.data.results[0])
			})

		}catch(err){
				console.log(err, 'deu erro')
			}
	}

	

// 	useEffect(() => {
//     if (!userData) onClicke()
//   }, [userData])

	
	return (
		<div className=" container-grid">
			
			
			<Card className="container-login ">
				
				{userData ? (
				// eslint-disable-next-line jsx-a11y/alt-text
				<img className="photo-login" src={userData?.picture?.medium} />
			) : <Logo widthIcon={120} heightIcon={120} />		
			}
			<p className="name-login">Nome</p>
			 <button className="input-login">{userData?.name?.title} {userData?.name?.first} </button>
			 <p className="name-login">Sobrenome</p>
			 <button className="input-login">{userData?.name?.last} </button>
			 <div className="display-flex">
			 <Button text={"Criar usuário"} className='margin-lef teste'
					onClick={onClicke}
					/>
					<Button 
						text={"Começar quiz"} 
						className='teste'
						onClick={() => history.push('/quiz')}
					/>
			 </div>
				
					
			</Card >

		</div >
	)
}
export default Login
