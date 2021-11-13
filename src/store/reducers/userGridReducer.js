import { ADD_USERS } from '../../utils/types';

const INITIAL_STATE = {
	users: [],
};

const userGridReducer = (state = INITIAL_STATE, action) => {
	if (action === undefined) {
	}
	const { type, payload } = action;
	switch (type) {
		case ADD_USERS:
			return {
				...state,
				users: [...state.users, ...payload],
			};
		default:
			return state;
	}
};

export default userGridReducer;
