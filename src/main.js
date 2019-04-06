import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home'
// import './style/index.less';

class Main extends Component {

  render () {
    return (
      <Row className="page-wrapper">
              <Header />
              { this.props.children }
              <Footer />
      </Row>
    )
  }

}

export default Main;
