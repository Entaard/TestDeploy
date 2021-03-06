import React from 'react';
import { FETCH_USERS } from '../constants/Types';

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_USERS:
			return action.payload.data;
	}
	return state;
}
