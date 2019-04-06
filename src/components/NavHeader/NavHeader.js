import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

import '../../style/base.less';
import './style.less';
import NavConf from '../../config/navConfig';

class NavHeader extends Component {
    constructor (props) {
        super(props);
        this.state = {
            current:''
        }
    }

    // getInitialState = () => {
    //     return {
    //         current: 'mail',
    //     };
    // }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        console.log(NavConf);
        return (
            <div>
                <Menu onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="horizontal"
                      className="header-nav"
                >
                    {
                        NavConf.map(item => (
                            <Menu.Item key={ item.key } className="margin-left">
                                <Icon type={ item.type } />{ item.name }
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </div>
        );
    }
}

export default NavHeader;
