import React, {Component} from 'react'
import { Layout } from 'antd';
import {
    Link
} from 'react-router-dom'
import {connect} from "react-redux";
import {setId} from "../store/action";
const  {Content} = Layout;

class About extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {

        // this.props.setId('m1')
    }

    onClick=()=>{

        let {history,setId,pageId}=this.props
        setId('555')
        history.push({ pathname:'/home',state:{day :pageId}})
    }

    render () {
        let {pageId}=this.props
        return (
            <div>
                    <Layout>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <span className='fontSize'>关于我们</span>
                            <div onClick={this.onClick}>去主页</div>
                            <div>{pageId}</div>
                        </Content>
                    </Layout>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    console.log(state)
    return {
        pageId: state.pageId
    }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setId (data) {
            dispatch(setId(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
