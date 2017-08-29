import React from 'react';
import PCBanner from './pcBanner';
import PCharacter from './pcCharacter';


export default class PCIndex extends React.Component {
	render(){
		return (
			<div>
				<PCBanner />
				<PCharacter />
			</div>
		);
	};
}