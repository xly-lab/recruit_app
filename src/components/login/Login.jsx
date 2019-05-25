import React, {Component} from 'react'
import logo from './timg.jpg'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div className="logo-container">
          <img src={logo} alt="logo" className='logo-img'/>
        </div>
    }

}
