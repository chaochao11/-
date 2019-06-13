import React, { PureComponent } from 'react';
import { Icon, Tooltip, Button, Input } from "antd";

import styles from './index.less';
import a from "../../../public/1.jpeg";
import b from "../../../public/3.jpeg";
import c from "../../../public/4.jpeg";
import d from "../../../public/5.jpg";
import e from "../../../public/6.png";
import f from "../../../public/7.png";
import g from "../../../public/8.png";

const { TextArea } = Input;

class Home extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: b,
          text: "今天下雨了?",
          name: "小明",
          time: "16分钟前",
        },
        {
          img: c,
          text: "今天天气不错，我要出去玩!",
          name: "小花",
          time: "1小时前",
        },
        {
          img: d,
          text: "还是在家好，哈哈!!!!!!",
          name: "小莉",
          time: "3小时前",
        }
      ],
      flag: false,
      disabled: true,
      text: ""
    };
  }

  sendFunc = () => {
    this.setState({
      flag: true
    });
  };

  backFunc = () => {
    this.setState({
      flag: false
    });
  };

  onChange = (event) => {
    this.setState({
      disabled: false,
      text: event.target.value
    });
  };

  send =() => {
    const { text, data } = this.state;
    // let num = 3;
    const params = {
      img: a,
      text,
      name: "风一样的人",
      time: "1分钟前",
    };
    data.unshift(params);
    this.setState({
      data,
      flag: false
    });
  };

  render() {
    const { data, flag, disabled } = this.state;
    const text = <span><span><Icon type="heart" /><span style={{marginLeft: "5px"}}>赞</span></span><span style={{marginLeft: "15px"}}><img style={{width: "14px"}} src={e} alt="" /><span style={{marginLeft: "5px"}}>评论</span></span></span>;
    const item = data.map((cur, index) => {
      return (
        <div key={index.toString()} className={styles.box}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src={cur.img} alt="" />
            </div>
            <div className={styles.right}>
              <span>{cur.name}</span>
              <p>{cur.text}</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <span>{cur.time}</span>
            <Tooltip trigger="click" placement="left" title={text}>
              <b>··</b>
            </Tooltip>
          </div>
        </div>
      );
    });
    return (
      <div className={styles.homePage}>
        {flag ? (
          <div className={styles.homeSend}>
            <div className={styles.homeSendTop}>
              <div className={styles.homeSendTopLeft}>
                <Icon type="left" onClick={this.backFunc} />
                <span>发表文字</span>
              </div>
              <Button type="primary" disabled={disabled} onClick={this.send}>发表</Button>
            </div>
            <div className={styles.homeSendCenter}>
              <TextArea onChange={this.onChange} placeholder="这一刻你的想法..." autoFocus rows={4} />
            </div>
            <div className={styles.homeSendBottom}>
              <div className={styles.homeSendOne}>
                <div>
                  <img src={g} alt="" /><span>所在位置</span>
                </div>
                <Icon type="right" />
              </div>
              <div className={styles.homeSendTwo}>
                <div>
                  <Icon style={{ fontSize: "18px" }} type="user" /><span>谁可以看</span>
                </div>
                <div>
                  <span>公开</span><Icon style={{ color: "#999", marginLeft: "20px" }} type="right" />
                </div>
              </div>
              <div className={styles.homeSendThree}>
                <div>
                  <span style={{fontSize: "18px"}}>@</span><span style={{marginLeft: "20px"}}>提醒谁看</span>
                </div>
                <Icon type="right" />
              </div>
              <div style={{height: "45px", lineHeight: "45px"}}>
                <img src={f} alt="" />
              </div>
            </div>
          </div>
        ): [
          <div className={styles.homeBtc} key="homeBtc">
            <div className={styles.homeLeft}>
              <Icon type="left" />
            </div>
            <div className={styles.homeRight} onClick={this.sendFunc}>
              <Icon type="camera" />
            </div>
            <div className={styles.head}>
              <span>风一样的人</span>
              <img src={a} alt="" />
            </div>
          </div>,
          <div className={styles.center} key="center">
            {item}
          </div>
        ]}
      </div>
    )
  }
}

export default Home;
