import React, {Component} from 'react'
import ReactDOM from 'react-dom'
/* eslint-disable no-new */
// 引入组件

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index'
import {Dynamic} from './lib/common'


const AsyncHome =Dynamic('Test')

const App =()=>{
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
        </div>
    )

}



// 渲染DOM
ReactDOM.render (
    (
       < div>
            {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
            <Provider store = {store}>
                <Router>
                    <div>
                        <Route path="/" component={App}/>
                        <Route path="/about" component={AsyncHome} />

                    </div>
                </Router>
            </Provider>
       </div>
    ),
    document.getElementById('root')
)