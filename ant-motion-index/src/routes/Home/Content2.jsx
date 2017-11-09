import React, { PropTypes } from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? {
        y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad',
      }
        : {
          x: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad',
        },
    };

    const childrenElements = [
      <Element key="0" prefixCls="banner-user-elem">
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock0`}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img src="/one.png" width="100%" alt="a" />
            </span>
          </TweenOne>
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              知识产权维权援助
            </h1>
            <p key="p" id={`${props.id}-content`}>
              维权援助与举报电话：<br />
              <br />
              <img src="/12330.png" width="80%" alt="a" />
            </p>
          </QueueAnim>
        </QueueAnim>
      </Element>,
      <Element key="1" prefixCls="banner-user-elem">
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title block1`}
          key="text"
          id={`${props.id}-wrapperBlock1`}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img src="/yidian.png" width="50%" />
            </span>
          </TweenOne>
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              采用移动端的维权取证
            </h1>
            <p key="p" id={`${props.id}-content`}>
              文字、录音、录像、拍照取证全覆盖
              <br />
              <img src="/downQRcode.png" />
            </p>
          </QueueAnim>

        </QueueAnim>
      </Element>,
    ];
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              key="banner"
            >
              {childrenElements}
            </BannerAnim>
          </div>
        </TweenOneGroup>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner2',
};

export default Banner;

