import React from 'react';

const Hobbies = () => {
	return (
		<div className='hobbies'>
			<h3>Intérêts</h3>
			<ul>
				<li className='hobby'>
					<i className='fas fa-running'></i>
					<span>Sports</span>
				</li>
				<li className='hobby'>
					<i></i>
					<span>Voyages</span>
				</li>
				<li className='hobby'>
					<i></i>
					<span>Informatique</span>
				</li>
				<li className='hobby'>
					<i className='fas fa-bitcoin'></i>
					<span>Finance / Crypto-monnaies</span>
				</li>
			</ul>
		</div>
	);
};

export default Hobbies;
