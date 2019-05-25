import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  // Radio,
  Button
} from 'antd-mobile'
import Logo from '../../components/login/Login'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
          username:'',
          password:''
        }
    }
    goRegister=()=>{
      this.props.history.replace('/register')
    };

    login=()=>{

    };
    handleData=(name,val)=>{
      this.setState({
        [name]:val
      })
    }
    render() {
        return <div>
          <NavBar>直聘</NavBar>
          <Logo></Logo>
         <WingBlank>
           <List>
             <WhiteSpace/>
             <InputItem placeholder='请输入用户名' onChange={val=>this.handleData('username',val)}>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</InputItem>
             <WhiteSpace/>
             <InputItem placeholder='请输入密码' onChange={val=>this.handleData('password',val)}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 码：</InputItem>
             <WhiteSpace/>
             <Button type='primary' onClick={this.login}>登录</Button>
             <Button onClick={this.goRegister}>还没有账户</Button>
           </List>
         </WingBlank>
        </div>
    }

}
