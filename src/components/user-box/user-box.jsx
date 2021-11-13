import React from 'react';
import '../user-box/user-box.css';
import { formatDistance } from '../../utils/funcs';

export default function UserBox({ user }) {
	let className = user.online ? 'user-box online' : 'user-box';

	return (
		<div className={className}>
			<div className='profile-photo'>
				<img src={user.picture} alt='user profile' />
			</div>
			<div className='profile-info'>
				<div className='profile-details'>
					<div className='profile-age'>{user.age}</div>
					<div className='profile-name'>{user.name}</div>
					<div className='profile-online'>
						{user.online ? 'online' : 'offline'}
					</div>
				</div>
				<div className='profile-distance'>
					{formatDistance(user.distance)}
				</div>
			</div>
		</div>
	);
}
