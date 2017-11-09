import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
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
    const childrenEles = [
      <Element key={0}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg0`}
          key="bg"
        />
        <div className="bg-gray"></div>
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock0`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock0`}

          />
          <h1
            key="contentOne"
            id={`${props.id}-contentBlock0`}
          >
            {/* 关于我们 */}
          </h1>
          {/* <h2
            key="contentTwo"
            id={`${props.id}-contentBlock0`}
          >
            100万+企业的共同选择
          </h2>
          <Button
            type="ghost"
            key="button"
            className="retrieval"
            id={`${props.id}-buttonBlock0`}
          >
            专利检索
          </Button> */}
        </QueueAnim>
      </Element>
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
              {childrenEles}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        {/* <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne> */}
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;