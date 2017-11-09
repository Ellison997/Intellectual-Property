import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner extends React.Component {

  handleSizeChange = (e) => {
    window.location.href="http://124.128.225.189:8060/pubsearch/patentsearch/searchHomeIndex-searchHomeIndex.shtml";
  }
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
            让数据说话      用心助力创新
          </h1>
          <h2
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
            onClick={this.handleSizeChange}
          >
            专利检索
          </Button>
        </QueueAnim>
      </Element>,
      <Element key={1}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg1`}
          key="bg"
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock1`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock1`}
          //dangerouslySetInnerHTML={{
          //  __html: title,
          //}}
          />
          <div className="content">
            <h1
              key="contentOne"
              id={`${props.id}-contentBlock1`}
              className="contentOne"
            >
              知识产权一点通
          </h1>
            <h2
              key="contentTwo"
              id={`${props.id}-contentBlock1`}
              className="contentTwo"
            >
              随身携带的全球专利文献数据
          </h2>
            <div className="clearfax">
              <div className="div1"><img src="/downQRcode.png" /></div>
              <div className="div2">
                <a className="apple" href="https://itunes.apple.com/cn/app/zhi-shi-chan-quan-yi-dian-tong/id892264333?mt=8 " target="_blank"><img src="/apple.png" /><div className="txt">APP Store</div></a>
                <a className="android" href="http://www.sdips.gov.cn/attachment/APP-Android.apk " target="_blank"><img src="/android.png"/><div className="txt">Android</div></a>
              </div>
            </div>
          </div>

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