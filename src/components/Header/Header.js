import React, {Component} from 'react';
import { Row, Col, Icon } from 'antd';

import NavHeader from '../NavHeader/NavHeader'
import './style.less'

class Header extends Component {
    render() {
        return (
            <Row className="header-wrapper">
                <Col span={3} className="logo-wrapper"> <i className="iconfont icon-LOGOsheji"><span className="logo-font">My app</span></i> </Col>
                <Col span={18}>  <NavHeader /> </Col>
                <Col span={3} className="header-user">
                    <img className="user-icon" src="https://avatar.csdnimg.cn/D/0/F/2_weixin_43139949.jpg"/>
                    <span>未登录</span>
                </Col>
            </Row>
        );
    }
}

export default Header;
