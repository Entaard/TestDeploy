import React from 'react';
import SearchBar from '../containers/SearchBar';
import UserList from '../containers/UserList';

export default function () {
	return (
		<div>
			Hello it's user index page!
			<SearchBar />
			<UserList />
		</div>
	);
}
