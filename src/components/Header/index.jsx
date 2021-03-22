import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'



// console.log(nanoid());
// console.log(nanoid());
// console.log(nanoid());
//安装一个ID库，yarn add nanoid 或者 npm i uuid  

export default class Header extends Component {
     //对接收的props进行：类型、必要性的限制
    static propTypes =  {
        addTodo:PropTypes.func.isRequired
    }

    //键盘事件的回调
    handlekeyUp = (event) => {
        //结构赋值获取keyCode,target
        const { keyCode, target } = event
        //判断是否是回车键
        if (keyCode !== 13) return
        //添加的todo名字不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        //准备好一个todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false }
        // console.log(target.value);
        //将todoObj传递给App
        this.props.addTodo(todoObj)
        //清空输入
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handlekeyUp} type="text" placeholder="请输入内容，按回车键确认" />
            </div>
        )
    }
}
