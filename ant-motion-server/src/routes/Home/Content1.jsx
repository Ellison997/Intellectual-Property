import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content5',
  };

  getBlockChildren = (item, i) =>
    (<li
      key={i}
      id={`${this.props.id}-block${i}`}
    >
    <span>
        <img src={item.img} width="100%" />
      </span>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const dataSource = [
      { img: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '委托方式', content: '当面受理、网上受理、传真受理、委托受理等。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '成果鉴定', content: '为科技工作者、大专院校、企业及个人提供结题的查新检索。' },
     // { img: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '科技（专利）奖项评审检索', content: ' 根据《专利奖项评价指标》及《科技奖项评价指标》，针对奖项的具体要求出具检索分析报告。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png', title: '科技计划，立项查新', content: ' 国家863计划、973计划、科技攻关计划、软科学计划、火炬计划、国际合作计划、重点新产品计划、中小企业创新基金等各级政府部门立项项目。' },
    ];
    const ulChildren = dataSource.map(this.getBlockChildren);
    delete props.isMode;
    const queue = isMode ? 'bottom' : 'left';
    const imgAnim = isMode ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className="content-template-wrapper content5-wrapper">
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
           <h1
              key="h1"
              
              id={`${props.id}-title`}
            >
              专利检索、科技查新
            </h1>
             
            <QueueAnim
              component="ul"
              key="ul" type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyleBool
          >
            <img width="100%" src="retrieval.png" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
