import { IdentityService } from '../../services/identity-service';
import { ADD_USERS } from '../../utils/types';

export const addUsers =
	(number = 20) =>
	async (dispatch) => {
		let usersArray = await IdentityService.getUser(number);

		dispatch({ type: ADD_USERS, payload: usersArray });
	};
