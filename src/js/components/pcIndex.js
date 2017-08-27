import React from 'react';
import PCHeader from './pcHeader'
import Footer from './Footer'
import PCBanner from './pcBanner'
import PCCharacter from './PCCharacter'

import { BackTop } from 'antd';

export default class PCIndex extends React.Component {
	render(){
		return (
			<div>
				<PCHeader></PCHeader>
				<PCBanner></PCBanner>
				<PCCharacter></PCCharacter>
				
				<BackTop />
				<Footer></Footer>

			</div>

		);
	};
}