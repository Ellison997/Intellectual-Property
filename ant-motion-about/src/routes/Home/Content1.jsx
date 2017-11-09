import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    // const animType = {
    //   queue: isMode ? 'bottom' : 'right',
    //   one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
    //     : { x: '-=30', opacity: 0, type: 'from' },
    // }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          {/* <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
            </span>
          </TweenOne> */}
          <QueueAnim
            className={`${props.className}-text`}
            //type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
            山东省专利信息服务中心介绍
            </h1>
            <p key="p1" id={`${props.id}-content1`}>
            山东省专利信息服务中心，是经山东省编办批准成立，隶属于山东省知识产权局的事业单位。多年来，中心一直致力于为我省及所辐射区域搭建知识产权
            服务体系，向政府提供决策支撑，为企业量身打造知识产权产品，并面向全社会提供知识产权维权援助，知识产权信息传播及利用等综合性、一站式服务。
            </p>
            <p key="p2" id={`${props.id}-content2`}>
            中心拥有一支经验丰富、专业性强、服务意识高、素质过硬的精英团队，人员均为本科以上学历，其中研究生以上学历超过70%，所学专业涵盖多种学科多个语种，
            且有多名全国专利信息领军人才、师资人才、信息化项目管理师、GB/T29490外审员、专利分析师、专利代理人和律师，可为我省及所辐射区域的经济发展、产业
            转型升级、新兴产业发展等战略发展目标的实现发挥出积极作用。
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
