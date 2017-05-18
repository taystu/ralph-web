import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Booking from './components/Booking';
import Home from './components/Home';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={Home} />
		<Route path="/booking" component={Booking}  />
	</Route>
);