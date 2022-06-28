import { useState, useEffect } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	// Les régles de useEffect
	 useEffect(() => {
		console.log("s'affiche à chaque rendu");
		})
	// 	useEffect(() => {
	// 	console.log("s'affiche au premier rendu de footer");
	// 	},[])
	// 	useEffect(() => {
	// 	console.log("s'affiche au premier rendu de footer et quand cart sera mis à jour");
	// 	},[cart])


	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
