import React, {Component} from 'react';

import Header from '../common/header/header'
import Footer from '../common/footer/footer'

import LineTitle from "../component/lineTitle/lineTitle"

import './home.sass'


const advCard = {
    _1st:{title:"0元注册开户", text:"下单快速，提款方便，不错过任何一次机会"},
    _2nd:{title:"投资产品种类多", text:"满足更多人多样化的选择"},
    _3rd:{title:"双向持仓", text:"可同时买涨买跌，降低风险"},
    _4th:{title:"邀请好友赚佣金", text:"推广分享注册，朋友赚钱你也赚"}

}
const actCard = {
    _1st:{title:"注册送礼金", text:"注册即送18元，可直接用于实盘交易"},
    _2nd:{title:"注册送模拟金", text:"10万模拟金，新老用户都可在模拟盘交易，研究期货投资策略，成功走向期货巅峰。"},
    _3rd:{title:"魔力转圈圈", text:"注册、交易、邀好友都可参与抽奖，玩转期货同时赢取豪礼。"}
}

const partnerIcons= [
        {url:require("../../assets/images/shanghai.png")},
        {url:require("../../assets/images/shanghai.png")},
        {url:require("../../assets/images/dalian.png")},
        {url:require("../../assets/images/guoxin.png")},
        {url:require("../../assets/images/zhongjin.png")},
        {url:require("../../assets/images/qingdao.png")},
        {url:require("../../assets/images/yintianxia.png")},
        {url:require("../../assets/images/yintianxia.png")},
        {url:require("../../assets/images/zhitian.png")},
        {url:require("../../assets/images/zhitian.png")},
        {url:require("../../assets/images/zheshang.png" )},
        {url:require("../../assets/images/qinghai.png")},
        {url:require("../../assets/images/haixia.png")},
        {url:require("../../assets/images/weizhi.png")},
        {url:require("../../assets/images/tianjiaosuo.png")},
        {url:require("../../assets/images/tianjiaosuo.png")},
]

class Banner extends Component{
    render(){
        return(
            <div className={"banner"} >
                <Header/>
            </div>
        )
    }
}


class AdvCard extends Component{
    render(){
        return (
            <div className="advCard">
                <p>
                    <img className="srcIcon" src={this.props.src}  />
                </p>
                <p className="advTitle">{this.props.title} </p>
                <p className="advText"> {this.props.text} </p>
            </div>
        )
    }
}

class AdvDetil extends Component{
    render(){
        return(
            <div className="AdvDetil">
                <AdvCard src={require("../../assets/images/regisiter.png")} title={advCard._1st.title} text={advCard._1st.text}/>
                <AdvCard src={require("../../assets/images/products.png")} title={advCard._2nd.title} text={advCard._2nd.text}/>
                <AdvCard src={require("../../assets/images/transfer.png")} title={advCard._3rd.title} text={advCard._3rd.text}/>
                <AdvCard src={require("../../assets/images/invite.png")} title={advCard._4th.title} text={advCard._4th.text}/>
            </div>
        )
    }
}

// 四大优势
class FourAdv extends Component{
    render(){
        return(
            <div className="fourAdv">
                <LineTitle titleUp="四大优势" titleDown="FOUR ADVANTAGES"></LineTitle>
                <div>
                    <AdvDetil/>
                </div>
            </div>
        )
    }
}

// 热门行情
class HotMarket extends Component{
    render(){
        return(
            <div className="hotMarket">
                <div className="hotgraph">
                    行情
                </div>
            </div>
        )
    }
}



class ActCard extends Component{
    render(){
        return(
            <div className="actCard">
                <img className="actCardBkg" src={this.props.src} />
                <p className="actTitle">{this.props.title}</p>
                <p className="actText">{this.props.text}</p>
            </div>
        )
    }
}


class ActDetial extends Component{
    render(){
        return(
            <div className="actDetial">
                <ActCard src={require("../../assets/images/gift.png")} title={actCard._1st.title} text={actCard._1st.text} />
                <ActCard src={require("../../assets/images/mock.png")} title={actCard._2nd.title} text={actCard._2nd.text} />
                <ActCard src={require("../../assets/images/magic.png")} title={actCard._3rd.title} text={actCard._3rd.text} />
            </div>
        )
    }
}

// 热门活动
class HotAct extends Component{
    render(){
        return(
            <div className="hotAct">
                <LineTitle titleUp="热门活动" titleDown="POPULAR ACTIVITIES"></LineTitle>
                <div>
                    <ActDetial/>
                </div>
            </div>
        )
    }
}


// 财富期货平台
class Platform extends Component{
    render(){
        return(
            <div className="paltform">
                <div className="platformBkg">
                    <LineTitle titleUp="财富期货平台" titleDown="CF FUTURES PLATFORM" ></LineTitle>
                    <div className="platformDes">
                        <span>· 界面清晰明朗</span>
                        <span>· 简单操作、下单灵活</span>
                        <span>· 壹击成交、移动止损功能</span>
                        <span>· 安装便捷、占用系统资源小</span>
                    </div>
                    <PlatformDownload/>
                </div>
            </div>
        )
    }
}




// 下载区

class PlatformDownload extends Component{
    render(){
        return(
            <div className="PlatformDownload">
                <div>
                    <img className="phone"  src={require("../../assets/images/phone.png")}/>
                </div>
                <div className="scanQrcode">
                    <span className="qrCode"></span>
                    <span>
                        <button className="btn">
                            <img/>
                            <span></span>
                        </button>
                        <button className="btn">
                            <img/>
                            <span></span>                        
                        </button>
                    </span>

                </div>
            </div>
        )
    }
}


// 合作伙伴
class Partner extends Component{
    render(){
        return(
            <div className="partner">
                <LineTitle titleUp="合作伙伴" titleDown="COOPERATIVE PARTNER" ></LineTitle>
                <ul className="partnerIcons">
                {partnerIcons.map(
                   (partnerIcon,i)=>{
                      return (
                          <img src={partnerIcon.url}/>
                    )
                   }
              )}                   
                </ul>
                {/* <ul className="partnerIcons">
                {partnerIcons.map(
                   (partnerIcon,i)=>{
                      return (<div key={i}><img src={partnerIcon.url} >
                      )
                   }
              )}                
                </ul>    */}
            </div>
        )
    }
}

// 合作伙伴 icon


class Contain extends Component{
    render(){
        return(
            <div className={"contain"}>
                <FourAdv/>
                <HotMarket/>
                <HotAct/>
                <Platform/>
                <Partner/>
            </div>
        )
    }
}

 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className={"home"}>
                <Banner/>
                <Contain/>
                <Footer/>

            </div>
        )
    }

}

export default Home