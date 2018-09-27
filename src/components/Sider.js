import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const { Sider } = Layout;

class Side extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
    }

    render () {

        return (
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
                            <Link to='/'/>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                            <Link to='/about'/>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user" />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </div>
        )
    }
}

export default Side