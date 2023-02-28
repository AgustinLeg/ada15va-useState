import './App.css';
import { Contador } from './components/Contador';
import { Titulo } from './components/Titulo';

// si empieza con use... es un hook
// Un estado es una forma de mantener y actualizar información en un componente de una aplicación. Es como una "memoria" que el componente puede usar para almacenar y acceder a los datos que necesita para funcionar correctamente.

// renderizado es cuando react vuelve a ejecutar el componente y actualiza la vista

// Reglas de un useState
// 1 - Se tiene que usar dentro de un componente
// 2 - No puedo ejecutar inmediatamente

function App() {
	return (
		<div>
			<h1> Clase 06</h1>

			<Contador />

			<Titulo />
		</div>
	);
}

export default App;
