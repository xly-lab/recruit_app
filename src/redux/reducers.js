/*
* reducers creator的工厂函数
* */
//合并工厂函数
import {combineReducers} from 'redux'
function xxx(state = 0,action) {
  return state;
}
function yyy(state = 0, action) {
  return state;
}
export default combineReducers({
  xxx,yyy
})
