import { useState } from 'react';

export const Contador = () => {
	//     estado  ,  la funcion encargada de cambiar el valor del estado
	const [contador, setContador] = useState(5);
	console.log('contador');

	return (
		<div>
			<h2>El valor de contador es: {contador}</h2>
			<button
				onClick={() => {
					setContador(contador - 1);
				}}
			>
				Decrementar
			</button>
			<button
				onClick={() => {
					setContador(contador + 1);
				}}
			>
				Incrementar
			</button>
		</div>
	);
};
