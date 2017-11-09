import React from 'react';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={item.img} height="100%" /></span>
        <p>{item.content}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const dataArray = [
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/310', content: '专利权的无效宣告程序' },
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/390', content: '专利无效典型案例' },
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/152', content: '中小学发明创造与知识产权' },
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/595', content: '2014韩国知识产权公开课' },
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/212', content: '美国知识产权系列公开课' },
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/211', content: '知识产权概论' },
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/46', content: '外观设计专利的审查及其案例' },
      { img: 'http://elearning.ciptc.org.cn/public/site/classcourse/image/588', content: '国内药品注册及展望' },
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        className="content-template-wrapper content4-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            课程介绍
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
           截止到2017年上半年，平台已经建立地方子平台15个，地方分站150多个,培训规模突破了76万人次
          </TweenOne>
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
