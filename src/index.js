import React from 'react'
import {render} from 'react-dom'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import Main from './containers/main/Main'
import Register from './containers/register/Register'
import Login from './containers/login/Login'
render(<Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path='/main' component={Main}/>{/*默认组件*/}
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Redirect to='/main'/>
    </Switch>
  </HashRouter>
</Provider>,document.getElementById('root'));

