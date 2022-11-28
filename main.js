import './src/css/style.css'
import javascriptLogo from './src/img/javascript.svg'
import { setupCounter } from './src/js/counter.js'


document.querySelector('#app').innerHTML = `
	<div>
		<a class="inline-block" href="https://vitejs.dev" target="_blank">
			<img src="./src/img/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a class="inline-block" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
			<img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
		</a>
		<h1 class="text-2xl">Hello Vite!</h1>
		<div class="card">
			<button id="counter" type="button"></button>
		</div>
		<p class="read-the-docs">
			Click on the Vite logo to learn more
		</p>
	</div>
`

setupCounter(document.querySelector('#counter'))

