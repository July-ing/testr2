import React from 'react';
import PCApp from './pcApp';
import { render } from 'react-dom';
import { hashHistory } from 'react-router'; 
import RouteMap from './routeMap';

export default class PCIndex extends React.Component {
	render(){
		return (
			<RouteMap history={hashHistory} />
		);
	};
}