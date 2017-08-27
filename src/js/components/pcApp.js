import React from 'react';
import PCHeader from './pcHeader'
import Footer from './Footer'
import { BackTop } from 'antd';

export default class PCApp extends React.Component {
	render(){
		return (
			<div>
				<PCHeader></PCHeader>
				<div>{this.props.children}</div>
				
				<BackTop />
				<Footer></Footer>

			</div>

		);
	};
}