import './App.scss';
import { CardQr } from './components/CardQr/CardQr';

const App = (): JSX.Element => {

	return (
		<main className='wrapper'>
			<div className="attribution">
				Challenge by{'  '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by{'  '}
				<a target="_blank" href="https://github.com/malopez1578">
					Miguel Angel López
				</a>
				.
			</div>
      <CardQr />
		</main>
	);
};

export default App;
