import axios from 'axios';

export class IdentityService {
	static getUser(number) {
		let apireq = 'https://randomuser.me/api/?results='
			.concat(`${number}`)
			.concat('&gender=male');
		return axios({
			method: 'get',
			url: apireq,
			responseType: 'json',
		})
			.then((response) => response.data.results)
			.then((results) => {
				return results.map((res) => ({
					name: res.login.username,
					age: parseInt(res.dob.age) >= 18 ? res.dob.age : 18,
					picture: res.picture.large,
					online: Math.random() < 0.24,
					distance: Math.random() * 10000,
				}));
			});
	}
}
