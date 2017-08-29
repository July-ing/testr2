import React from 'react';
import {Row, Col,Menu} from 'antd';
import {Link} from 'react-router';


const MenuItemGroup = Menu.ItemGroup;

export default class PCCharacter extends React.Component {
	render(){
		let style = (i) => {
      		return {backgroundImage: 'url(images/c'+i+'.jpg)'}
    	}
    
		return (
			<div className="character">
				<h2>明星</h2>
				<Row>
					<Col span={4}></Col>
					
					<Col span={16}>
						<ul>
							<li>
								<Link to="/character/:1"><div style={style(1)} ></div>米奇</Link>
							</li>
							<li>
								<Link to="/character/:2"><div style={style(2)} ></div>白雪公主</Link>
							</li>
							<li>
								<Link to="/character/:3"><div style={style(3)} ></div>赛车总动员</Link>
							</li>
							<li>
								<Link to="/character/:4"><div style={style(4)} ></div>苏菲亚</Link>
							</li>
							<li>
								<Link to="/character/:5"><div style={style(5)} ></div>冰雪奇缘</Link>
							</li>
							<li>
								<Link to="/character/:6"><div style={style(6)} ></div>星球大战</Link>
							</li>
						</ul>
					</Col>
					
					<Col span={4}></Col>
					</Row>
			</div>
		);
	};
}