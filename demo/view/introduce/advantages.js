import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import surpervise from '../../assets/images/supervise.png'

import './advantages.sass'


const detils = {
  supervise:{title:"监管保障",id:"01",translate:"REGULATORY SAFEGUARDS",text:"监管部门依法审核期货交易所、期货结算机构的设立，并审核其章程和业务规则；审核我司上市期货、期权产品及合约规则；监管市场相关参与者的交易、结算、交割等业务活动；通过对金融期货公司进行适当的业务管理，确保对投资者的保护和金融期货行业的稳健成长。"},
  banlance:{title:"资金安全",id:"02",translate:"FUND SAFETY",text:"用户开户入金以后，资金将由第三方银行存储管理，同时受到监证会监督，未经用户授权，任何人无权处置客户账户内的任何资产，用户资金的转入和转出均只能客户本人操作，请广大用户妥善保管账户信息安全。"},
  transcation:{title:"交易保障",id:"03",translate:"TRANSACTION SAFEGUARDS",text:"期货交易中，为了确保履约，维护交易双方的合法权益，实行保证金制度。保证金是投资者履行合约的财力保证，凡参与期货交易，无论买方还是卖方，均需按所在交易所的规定缴纳保证金。保证金是用于结算和担保履约的资金，在订单结算完成后若亏损会从中扣除，盈利全数退还账户中。"},
  private:{title:"隐私安全",id:"04",translate:"PRIVACY SECURITY",text:"我司严格遵守国家相关的法律法规，保护用户的隐私。未经用户的同意，我们永不会向任何第三方公司、组织和个人披露您的个人信息、账户信息以及交易信息，对用户交易资金的保管完全按照‘专户专款专用’的标准模式进行运作，用户交易资金账户是可以完全放心的。"},

}


class Detials extends Component{
  render(){
    return(
      <div className="detialBox">
        <img className="advImg" src={this.props.src} />
        <span>
          <p>
            <span className="advTitle">{this.props.title}</span>
            <span className="advId">{this.props.id}</span>
          </p>
          <p className="advTranslate">{this.props.translate}</p>
          <p className="advText">{this.props.text}</p>
          <p className="advText">{this.props.text2}</p>
        </span>
      </div>
    )
  }
}


 class Advantages extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

      
      return (
          
            <div className="advantages">
              <div className="detial">
                <Detials src={require("../../assets/images/supervise.png")} title={detils.supervise.title} id={detils.supervise.id} translate={detils.supervise.translate} text={detils.supervise.text} />
                <Detials src={require("../../assets/images/balance.png")} title={detils.banlance.title} id={detils.banlance.id} translate={detils.banlance.translate} text={detils.banlance.text} />
                <Detials src={require("../../assets/images/transcation.png")} title={detils.transcation.title} id={detils.transcation.id} translate={detils.transcation.translate} text={detils.transcation.text} />
                <Detials src={require("../../assets/images/private.png")} title={detils.private.title} id={detils.private.id} translate={detils.private.translate} text={detils.private.text} />
              </div>
            </div>
          )
    }

}

export default Advantages