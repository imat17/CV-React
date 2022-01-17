import React from 'react';
// Importation de NavLink
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div classname='sidebar'>
			<div className='id'>
				<div className='idContent'>
					<img src='./media/billGates.jpg' alt='profil-pic' />
					<h3>Davaille-Leroy Matisse</h3>
				</div>
			</div>

			<div className='navigation'>
				<ul>
					{/* On injecte un className que quand celle-ci est active */}
					<li>
						<NavLink to='/' activeClassName='navActive'>
							<i className='fas fa-home'></i>
							<span>Accueil</span>
						</NavLink>
					</li>

					<li>
						<NavLink to='/competences' activeClassName='navActive'>
							<i className='fas fa-mountain'></i>
							<span>Compétences</span>
						</NavLink>
					</li>

					<li>
						<NavLink to='/portfolio' activeClassName='navActive'>
							<i className='fas fa-images'></i>
							<span>Portfolio</span>
						</NavLink>
					</li>

					<li>
						<NavLink to='/contact' activeClassName='navActive'>
							<i className='fas fa-address-card'></i>
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className='socialNetwork'>
				<ul>
					<li>
						<a href='https://www.google.fr' target='blank' rel='noopener noreferrer'>
							<i className='fab fa-linkedin'></i>
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='https://www.google.fr' target='blank' rel='noopener noreferrer'>
							<i className='fab fa-github'></i>
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='https://www.google.fr' target='blank' rel='noopener noreferrer'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href='https://www.google.fr' target='blank' rel='noopener noreferrer'>
							<i className='fab fa-codepen'></i>
						</a>
					</li>
				</ul>

				<div className='signature'>
					<p>MDL - 2022</p>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
