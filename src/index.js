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

import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index'
import {Dynamic} from './lib/common'
import { Layout, Menu, Icon } from 'antd';
import './css/comm.scss'

import Home from './view/home'
import About from './view/about'
const { Header, Content, Footer, Sider } = Layout;
const AsyncHome =Dynamic('Test')



const index=()=>{
    return(

        <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => { console.log(broken); }}
                onCollapse={(collapsed, type) => { console.log(collapsed, type)}}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                        <Link to='/home'/>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                        <Link to='/about'/>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav3</span>
                        <Link to='/test'/>
                    </Menu.Item>
                </Menu>
            </Sider>
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
                        <Layout>
                        <Route path="/" component={index}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/test" component={AsyncHome}/>
                        </Layout>
                    </div>
                </Router>
            </Provider>
       </div>
    ),
    document.getElementById('root')
)