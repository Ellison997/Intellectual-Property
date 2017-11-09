import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Content7 from './Content7';
import Content8 from './Content8';

import Footer from './Footer';
import Point from './Point';

import './less/antMotion_style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // 点的位置居中
    const list = ReactDOM.findDOMNode(this.refs.list);
    const listHeight = list.getBoundingClientRect().height;
    list.style.marginTop = ` -${listHeight / 2}px`;
    // // 点的位置居中
    // const list = ReactDOM.findDOMNode(this.refs.list);
    // const listHeight = list.getBoundingClientRect().height;
    // list.style.marginTop = ` -${listHeight / 2}px`;
    // // 点的位置居中
    // const list = ReactDOM.findDOMNode(this.refs.list);
    // const listHeight = list.getBoundingClientRect().height;
    // list.style.marginTop = ` -${listHeight / 2}px`;
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode}/>,
      <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode}/>,      
      <Content6 id="content_6_0" key="content_6_0" isMode={this.state.isMode}/>,
      <Content8 id="content_8_0" key="content_8_0" isMode={this.state.isMode}/>,
      <Content7 id="content_7_0" key="content_7_0" isMode={this.state.isMode}/>,
      <Content1 id="content_1_0" key="content_1_0" isMode={this.state.isMode}/>,
      <Content4 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      
      <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode}/>,
      // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point key="list" ref="list" data={['content_1_0', 'content_2_0', 'content_3_0', 'content_4_0', 'content_5_0']} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
