import React from 'react';
import PCHeader from './pcHeader'
import Footer from './Footer'
import { BackTop } from 'antd';

export default class PCApp extends React.Component {
	render(){
		return (
			<div>
				<PCHeader></PCHeader>
				{this.props.children}
				<BackTop />
				<Footer></Footer>
			</div>
		);
	};
}