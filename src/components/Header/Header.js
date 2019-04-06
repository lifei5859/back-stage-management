import React, {Component} from 'react'
import { Row, Col, Icon } from 'antd'
import fromDate from '../../tools/gitTime'
import NavHeader from '../NavHeader/NavHeader'
import { Link } from 'react-router-dom'
import './style.less'

class Header extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isLogoing: true
        }
    }

    componentWillMount () {
        this.timer = setInterval(() => {
            const nowTime =  fromDate()
            this.setState({
                nowTime
            })
        },1000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    exit = (e) => {
        e.preventDefault()
        this.setState({
            isLogoing: false
        })
    }
    render() {
        const { isLogoing, nowTime } = this.state
        return (
            <Row className="header-wrapper">
                <Col span={3} className="logo-wrapper"> <i className="iconfont icon-LOGOsheji"><span className="logo-font">My app</span></i> </Col>
                <Col span={15}>  <NavHeader /> </Col>
                <Col span={3} className="header-user">                 
                    {
                     isLogoing ? <span><span className="header-user">欢迎， 王大拿</span><a href="#" onClick={this.exit} className="user-btn">退出</a></span> : <Link to="/login" className="header-btn">请登录</Link>
                    }
                </Col>
                <Col span={3} className="header-date"> 
                    <span className="date"> { nowTime } </span>
                </Col>
            </Row>
        );
    }
}

export default Header;
