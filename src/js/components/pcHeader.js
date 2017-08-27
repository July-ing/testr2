import React from 'react';
import ReactDom from 'react-dom';
import {Row, Col, Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal,Affix} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
// import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
	constructor(){
		super();
		this.state = {
			current: "top",
			modalVisable: false,
			action:'login',
			hasLogined: false,
			userNickName:'',
			userid:'',
		};
	};

	componentWillMount(){
		if (localStorage.userid != '') {
			this.setState({hasLogined:true});
			this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
		}
	};

	setModalVisible(value){
		this.setState({modalVisable:value});
	};

	handleClick(e){

		if(e.key == "register"){
			this.setState({current:'register'});
			this.setModalVisible(true);
		}else if(e.key == "logout"){
			this.logout();
		}else{
			this.setState({current:e.key});
		}
	};
	
	handleSubmit(e){
		//提交数据
		e.preventDefault();
		var myFetchOptions = {
			method:'GET'
		};
		var formData = this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
			localStorage.userid = json.UserId;
			localStorage.userNickName = json.NickUserName;
		});
		

		if (this.state.action == "login") {
			this.setState({hasLogined:true});		
		}		
		message.success("请求成功！"+this.state.current);
		this.setModalVisible(false);

	};

	callback(key){
		if(key == 1){
			this.setState({action: 'login'});
		}else if(key == 2){
			this.setState({action: 'register'});
		}
	};

	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	}
	

	render(){
		let {getFieldDecorator} = this.props.form;
		const userShow = this.state.hasLogined?
			<SubMenu title={<span><Icon type="home" />{this.state.userNickName}</span>}>
        	  	<MenuItemGroup >
					<Menu.Item key="setting:1">
						<a href="#" className="personal">
							<Icon type="user"/>个人中心
						</a>
					</Menu.Item>

        	    	<Menu.Item key="logout" class="register" >
						<Icon type="logout"/>退出
							
					</Menu.Item>
            		
        	 	</MenuItemGroup>
        	  	
        	</SubMenu>
  			


			:
			<Menu.Item key="register" className="register">
				<Icon type="star-o"/>注册/登陆
			</Menu.Item>
		return (
			<headers>
				<Affix>
					<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="logo">
							<img src="/images/logo2.png" alt="logo" />			
							<span>Disney</span>
						</a>
					</Col>
					<Col span={14}>
						<Menu className="nav" mode = "horizontal" onClick={this.handleClick.bind(this)} selectedKeys = {[this.state.current]}>
							<Menu.Item key="top">
								<Link to="/home"> <Icon type="home-o"/>首页 </Link>
							</Menu.Item>
							<Menu.Item key="a">
								<Link to="/store"> <Icon type="home-o"/>首页 </Link>
								
							</Menu.Item>
							// <Menu.Item key="b">
							// 	<Link to="/home"> <Icon type="home-o"/>首页 </Link>
								
							// </Menu.Item>
							// <Menu.Item key="c">
							// 	<Link to="/home"> <Icon type="home-o"/>首页 </Link>
								
							// </Menu.Item>
		
							// <Menu.Item key="e">
							// 	<Link to="/home"> <Icon type="home-o"/>首页 </Link>
								
							// </Menu.Item>							
						</Menu>
						<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisable} onCancel = {() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}  okText="关闭">
							<Tabs type = "card" onChange={this.callback.bind(this)}>
								<TabPane tab="登陆" key="1">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											{getFieldDecorator('userName')(<Input placeholder="请输入您的账号" />)}
										</FormItem>
										<FormItem label="密码">
											{getFieldDecorator('password')(<Input type="password" placeholder="请输入您的密码" />)}
										</FormItem>
										<Button	type="primary" htmlType="submit">登陆</Button>
									</Form>
								</TabPane>
								<TabPane tab="注册" key="2">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											{getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号" />)}
										</FormItem>
										<FormItem label="密码">
											{getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码" />)}
										</FormItem>
										<FormItem label="确认密码">
											{getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请再次输入您的密码" />)}
										</FormItem>
										<Button	type="primary" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
								
							</Tabs>
						</Modal>
					</Col>					
					<Col span={1}></Col>
					<Col span={2}>
					    <Menu className="lore" mode="horizontal" onClick={this.handleClick.bind(this)} >
							{userShow}
						</Menu>
					</Col>
					<Col span={1}></Col>
					</Row>
				</Affix>
			</headers>
		);
	};
}

export default PCHeader = Form.create({})(PCHeader);