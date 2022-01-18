import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

// On crée une classe qui étend Component
class Languages extends Component {
	// Création d'un state => Stockage de données dynamiques
	state = {
		languages: [
			{ id: 1, value: 'Javascript', xp: 1 },
			{ id: 2, value: 'Css', xp: 1.3 },
			{ id: 3, value: 'Node.js', xp: 0.6 },
		],
		frameworks: [
			{ id: 1, value: 'React', xp: 0.8 },
			{ id: 2, value: 'Sass', xp: 1.3 },
			{ id: 3, value: 'Bootstrap', xp: 1 },
		],
	};
	render() {
		// Lorsque l'on dira languages ou framework > On renverra le state correspondant
		let { languages, frameworks } = this.state;

		return (
			<div className='languagesFrameworks'>
				{/*On envoie le tableau languages dans le composant ProgressBar*/}
				<ProgressBar languages={languages} className='languagesDisplay' title='languages' />
				<ProgressBar languages={frameworks} className='frameworksDisplay' title='frameworks' />
			</div>
		);
	}
}

export default Languages;
