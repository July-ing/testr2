import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {Router, Route,  browserHistory} from 'react-router';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {
	constructor(){
		super();
		this.state = {
			current: "top",
			modalVisible: false,
			action:'login',
			hasLogined: false,
			userNickName:'',
			userid:0
		};
	};
	componentWillMount(){
		if (localStorage.userid != '') {
			this.setState({hasLogined:true});
			this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
		}
	};
	setModalVisible(value){
		this.setState({modalVisible:value});
	};

	handleClick(e){

		if(e.key == "register"){
			this.setState({current:'register'});
			this.setModalVisible(true);
		}else{
			this.setState({current:e.key});
		}
	};

	login(){
		this.setModalVisible(true);
	};

	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
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
		if(this.state.action == "login") {
			this.setState({hasLogined: true});
			console.log(this.state.hasLogined);
		}
		message.success("请求成功！"+this.state.current);
		this.setModalVisible(false);

	}
	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	}

	render(){
		let {getFieldDecorator} = this.props.form;

		const userShow = this.state.hasLogined ?
		<a>
			<Icon type="star-o" />
		</a>
		:
		<Icon type="setting" onClick={this.login.bind(this)} />

		return (
			<div id="mobile">
				<headers>
					<img src="images/logo.png" alt="logo" />
					<span>ReactNews</span>
					{userShow}
				</headers>
				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel = {() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}  okText="关闭">
							<Tabs type = "card">
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
			</div>
		);
	};
}
export default MobileHeader = Form.create({})(MobileHeader);