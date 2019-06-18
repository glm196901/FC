import React, {Component} from 'react';



import Header from '../common/header/header'
import Footer from '../common/footer/footer'

import LineTitle from '../component/lineTitle/lineTitle'
import DownloadIcon from '../component/downloadIcon/downloadIcon'
import Qrcode from '../component/qrcode/qrcode'

import './download.sass'



const brights = [
    {icon:require("../../assets/images/unLogin.png"), title:"无需登录", text:"免费查看实时行情"},
    {icon:require("../../assets/images/quickly.png"), title:"迅速交易", text:"毫秒级别交易速度"},
    {icon:require("../../assets/images/chineseView.png"), title:"纯中文交易界面", text:"操作简单易上手"},
    {icon:require("../../assets/images/analysis.png"), title:"强大的技术分析能力", text:"68个技术指标、多种K线图形"},
    {icon:require("../../assets/images/various.png"), title:"交易品种丰富", text:"一站式交易外汇、商品、股指、数字货币"},
    {icon:require("../../assets/images/finacialIcon.png"), title:"财经资讯", text:"海量丰富的财经资讯"},
]


class BannerTitle extends Component{
    render(){
        return(
            <div className="bannerTitle">
                <span>只需一部
                    <span className="highlight">手机</span>，
                    全球期货
                    <span className="highlight">任</span>
                    您选
                </span>
            </div>
        )
    }
}

class BannerDownload extends Component{
    render(){
        return(
            <div className="bannerDownload">
                <div className="downloadTop">
                <Qrcode direction="right" srcIp={require("../../assets/images/iphoneIcon.png") } textIp={"iPhone"} stylesIp={ { color:"#fff"} } 
                        srcAd={require("../../assets/images/android.png") } textAd={"Android"} stylesAd={ { color:"#fff"} } />
                </div>
                <img/>
            </div>
        )
    }
}

class Banner extends Component{
    render(){
        return(
            <div className={"banner"} >
                 <Header/>     
                <BannerTitle/>
                <BannerDownload/>
            </div>
        )
    }
}

class Feature extends Component{
    render(){
        return(
            <div className="feature">
                <div className="featureDes">
                    <div className="featureContain">
                        <div className="featureTitle">财富期货是CF为亚洲大中华区投资者量身打造</div >
                        <p > —— 简单方便的全中文交易页面</p>
                        <p > —— 人性化智能化体验</p>
                        <p > —— 强大的功能加上毫秒级别的交易速度</p>
                        <p > —— 稳定安全，透明可靠</p>
                    </div>
                    <img className="phoneHalf" src={require("../../assets/images/phoneHalf.png")}/>
                </div>
            </div>
        )
    }
}

class BrightDetial extends Component{
    render(){
        return(
            <ul className="brightDetial">
                 {brights.map(
                   (bright,i)=>{
                      return (
                          <li key={i} className="brightBox" >
                            <img src={bright.icon} />
                            <div>
                                <div className="brightTitle">{bright.title}</div>
                                <div className="brightText">{bright.text}</div>
                            </div>
                          </li>
                    )
                   }
              )}      
            </ul>
        )
    }
}

class Bright extends Component{
    render(){
        return(
            <div className="bright">
                <LineTitle titleUp="财富期货亮点" titleDown="HIGHLIGHTS OF WEALTH FUTURES"></LineTitle>
                <BrightDetial/>
            </div>
        )
    }
}





class PlatformDownload extends Component{
    render(){
        return(
            <div className="PlatformDownload">
                <LineTitle titleUp="平台下载" titleDown="PLATFORM DOWNLOAD"></LineTitle>
                <div className="downloadBottom">
                    <DownloadIcon src={require("../../assets/images/iphoneIcon.png") } text={"iPhone"} styles={ {background:"#E7CE7E", color:"#fff"} }/>
                    <DownloadIcon src={require("../../assets/images/androidY.png") } text={"Android"} styles={ {borderColor:"#E7CE7E", color:"#E7CE7E"} }/>
                </div>
                <img className="phoneBig" src={require("../../assets/images/platformDownload.png")} />
            </div>
        )
    }
}

class Contain extends Component{
    render(){
        return( 
            <div className={"contain"}>
                <Feature/>
                <Bright/>
                <PlatformDownload/>
            </div>
        )
    }
}

 class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className={"download"}>
                <Banner/>
                <Contain/>                
                <Footer/>
            </div>
        )
    }

}

export default Download