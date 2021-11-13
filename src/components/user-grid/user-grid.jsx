import { React, useState, useEffect } from 'react';
import { IdentityService } from '../../services/identity-service';

export default function UserGrid(users = []) {
	const [myData, setMyData] = useState();

	useEffect(() => {
		async function fetchData() {
			let x = await IdentityService.getUser();
			setMyData(x);
		}
		if (myData === undefined) {
			fetchData();
		}
		console.log(myData);
	}, [myData]);

	return <div className='grid'>{JSON.stringify(myData)}</div>;
}
