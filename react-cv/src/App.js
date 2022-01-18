import React from 'react';

import {Routes, Route } from 'react-router-dom';

// Importation des pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';

// Création d'un composant sans état ( rsc )
// Partout ou "App" sera appellé , le code sera le suivant :
const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='contact' element={<Contact />} />
				<Route path='portfolio' element={<Portfolio />} />
				<Route path='competences' element={<Knowledges />} />
				<Route element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
