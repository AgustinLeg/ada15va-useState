import { useState } from 'react';

export const Titulo = () => {
	const [title, setTitle] = useState('Clase 06 - useState');

	const handleClick = () => {
		setTitle('Cambiado desde el boton :D');
	};

	console.log('cambio titulo');

	return (
		<div>
			<h2>Titulo: {title}</h2>
			<button onClick={handleClick}>Cambiar titulo</button>
		</div>
	);
};
