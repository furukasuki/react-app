import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import Sider from '../components/Sider'
const  {Content} = Layout;

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {

        console.log(this.props.location.state)
    }


    sx=()=>{
        window.location.reload()
    }


    render () {
        return (
            <div>
                    <Layout>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <span className='fontSize'>主页</span> <br/>
                            <span onClick={this.sx}>刷新</span>
                        </Content>
                    </Layout>
            </div>
        )
    }
}

export default Home