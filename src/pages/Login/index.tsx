import React, { useEffect, useState } from "react"
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
	const [userData, setUserData] = useState()

	const onClicke = () => {
		axios.get('https://randomuser.me/api/')
			.then((response) => {
				setUserData(response.data.results[0])
				console.log(response, 'opa')
			}).catch((error)=>{
				console.log(error, 'deu erro')
			})
	}

	// useEffect(() => {
  //   if (!userData) onClicke()
  // }, [])

	
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
					/>
			 </div>
				
					
			</Card >

		</div >
	)
}
export default Login