import React from 'react';

export default function UserBox(user) {
	return (
		<div className='user-box'>
			<div className='profile-photo'>
				<img src={user.image} alt='user profile'></img>
			</div>
			<div className='profile-info'>
				<div className='profile-details'>
					<div className='profile-age'>{user.age}|</div>
					<div className='profile-name'>{user.name}|</div>
					<div className='profile-online'>{user.online}</div>
				</div>
				<div className='profile-distance'>{user.distance}</div>
			</div>
		</div>
	);
}
