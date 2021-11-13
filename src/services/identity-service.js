import axios from 'axios';

export class IdentityService {
	static getUser() {
		return axios({
			method: 'get',
			url: 'https://randomuser.me/api/',
			responseType: 'json',
		})
			.then((response) => response.data.results[0])
			.then((results) => {
				console.log(results.registered.age);
				return {
					name: results.login.username,
					age:
						parseInt(results.registered.age) >= 18
							? results.registered.age
							: 18,
					picture: results.picture.medium,
					online: Math.random() < 0.24,
					distance: Math.random() * 10000,
				};
			});
	}
}
