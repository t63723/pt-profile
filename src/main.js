import App from './App.svelte';

// import './global.css';
import 'bulma/css/bulma.min.css';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then(registration => {
			console.log('SW registered: ', registration);
		}).catch(registrationError => {
			console.log('SW registration failed: ', registrationError);
		});
	});
}

const app = new App({
	target: document.body,
});

window.app = app;

export default app;
