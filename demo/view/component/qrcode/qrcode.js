import React, { Component } from 'react'

import DownloadIcon from '../downloadIcon/downloadIcon'

import './qrcode.sass'

const qrImg = {
    adQr: require("../../../assets/images/andriodQr.png"),
    iosQr: require("../../../assets/images/iosQr.png")

}

class Qrcode extends Component {
    constructor(props) {
        super(props); // 调用基类的所有初始化方法
        this.state = {
          hoverAd:false,
          hoverIos:true
        }
      }
    moverEnterAd = ()=>{
        this.setState({
            hoverAd:true,
            hoverIos:false
        })
    }  
    moverEnterIos= ()=>{
        this.setState({
            hoverAd:false,
            hoverIos:true
        })
    }  
    render() {

        return (
            <div className="qrcode" style={this.props.direction === "right" ? {flexFlow:"row nowrap"}:{flexFlow: "row-reverse nowrap"} }>
                <div >
                    <DownloadIcon  onMouseEnter={ this.moverEnterAd } src={this.props.srcIp} text={this.props.textIp} styles={this.props.stylesIp} />
                    <DownloadIcon  onMouseEnter={ this.moverEnterIos} src={this.props.srcAd} text={this.props.textAd} styles={this.props.stylesAd} />
                </div>
                <img  className="qrImg" src={ this.state.hoverAd === true ? qrImg.adQr : qrImg.iosQr} />
            </div>
        )
    }
}

export default Qrcode