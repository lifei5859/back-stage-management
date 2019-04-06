import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home'
// import './style/index.less';

class App extends Component {

  render () {
    return (
      <Row className="page-wrapper">
        {/*<Button>++++</Button>*/}
              <Header />
              <Home />
              <Footer />
      </Row>
    )
  }

}

export default App;
