import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import Logo from '../../components/login/Login'

// const listItem = List.Item;
export default class Register extends Component {
    state={/*收集表单数据*/
      username:'',//用户名
      password:'',//密码
      surePas:'',//确认密码
      type:'dashen'//用户类型 dashen/laoban
    };

    register=()=>{


    };
    handleData=(name,val)=>{
      this.setState({
      [name]:val
      })
    };
    goLogin=()=>{
      this.props.history.replace('/login')
    };
    render() {
      const {type} =this.state;
        return <div>
          <NavBar>硅谷直聘</NavBar>
          <Logo/>
          <WingBlank>
            <List>
              <WhiteSpace/>
              <InputItem placeholder='请输入用户名' onChange={val=>this.handleData('username',val)}>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</InputItem>
              <WhiteSpace/>
              <InputItem placeholder='请输入密码' onChange={val=>this.handleData('password',val)}> 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 码：</InputItem>
              <WhiteSpace/>
              <InputItem placeholder='请再次输入密码' onChange={val=>this.handleData('surePas',val)}>确认密码：</InputItem>
              <WhiteSpace/>

                &nbsp;&nbsp;&nbsp;&nbsp;<span>用户类型：</span>&nbsp;&nbsp;
                <Radio checked={type==='dashen'} onChange={()=>this.handleData('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
                <Radio checked={type==='laoban'} onChange={()=>this.handleData('type','laoban')}>老板</Radio>

              <WhiteSpace/>
              <Button type='primary' onClick={this.register}>注册</Button>
              <WhiteSpace/>
              <Button onClick={this.goLogin}>已有账户</Button>
            </List>
          </WingBlank>
        </div>
    }

}

/*
* import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    );
  }
}

ReactDOM.render(<App />, mountNode);*/
