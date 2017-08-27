import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col} from 'antd';

export default class Footer extends React.Component {
	render(){
		return (
			<footers>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="footer">
						&copy;&nbsp;2017 React. All Rights Reserved.
					</Col>
					<Col span={2}></Col>
				</Row>
			</footers>
		);
	}
}