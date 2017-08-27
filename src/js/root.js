import React from 'react';
import ReactDOM from 'react-dom';
//import {Router,Route,hashHistory} from 'react-router';
import Button from 'antd';
import PCIndex from './components/pcIndex';
import MobileIndex from './components/MobileIndex';

import ReactDom from 'react-dom';
import 'antd/dist/antd.css'; 
import MediaQuery from 'react-responsive';

// require('../css/pc');
// require('../css/mobile');

if (module.hot) {
    // 知会 webpack 该模块接受 HMR update
    module.hot.accept();
}

export default class Root extends React.Component {
	render(){
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
				<PCIndex></PCIndex>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
				<MobileIndex></MobileIndex>
				</MediaQuery>
			</div>

		);
	};
}

 ReactDOM.render(<Root/>, document.getElementById('mainContainer'));