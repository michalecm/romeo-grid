import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUsers } from '../../store/actions/userGridActions';
import UserBox from '../user-box/user-box';
import '../user-grid/user-grid.css';

export default function UserGrid() {
	const users = useSelector((state) => state.userGridReducer.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(addUsers(30));
	}, [dispatch]);

	const userBoxes = users
		.map((user, i) => <UserBox key={i} user={user}></UserBox>)
		.sort((x, y) => {
			return x.props.user.distance > y.props.user.distance
				? 1
				: x.props.user.distance < y.props.user.distance
				? -1
				: 1;
		})
		.sort((x, y) => {
			return x.props.user.online === y.props.user.online
				? 0
				: x.props.user.online
				? -1
				: 1;
		});

	return <div className='grid'>{userBoxes}</div>;
}
