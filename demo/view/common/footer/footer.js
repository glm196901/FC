import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Link, Switch,Redirect} from 'react-router-dom';



import './footer.sass';

const navItems = [
    // ,list2:'公司动态', list2Add: '/introduce/dynamics'
    {title:'公司介绍', add:"/introduce/brief",list1:'公司优势',list1Add:'/introduce/advantages' },
    {title:'行情中心', add:"/marketcenter/international",  list1:'国际期货', list1Add:'/marketcenter/international', list2:'股指期货', list2Add:'/marketcenter/stockindex', list3:'国内期货', list3Add:'/marketcenter/domestic' },
    {title:'资讯中心', add:"/infocenter/marketinfo", list1:'行业资讯', list1Add:'/infocenter/marketinfo', list2:'财经日历', list2Add:'/infocenter/dailynews', list3:'每周洞察' , list3Add:'/infocenter/everyweek' },
    {title:'下载中心', add:"/download", list1:'财经期货有限公司：贵金属|期货', list2:'客服QQ：2865002835',  list3:'地 址：香港岛薄扶林道东一单元', list4:'邮 箱：info@caifuqihuo.com'},
]





class NavContain extends Component {
    render () {
        const { navItem } = this.props
      return (
          <ul className={"navItem"}>
            <li>
              <NavLink to={navItem.add}>{navItem.title}</NavLink>
            </li>
            <ul className={"navList"}>
              <li>
                <NavLink to={navItem.list1Add ? navItem.list1Add : "#"}>{navItem.list1}</NavLink>
              </li>
              <li>
                <NavLink to={navItem.list2Add ? navItem.list2Add : "#"}>{navItem.list2}</NavLink>
              </li>
              <li>
                <NavLink to={navItem.list3Add ? navItem.list3Add : "#"}>{navItem.list3}</NavLink>
              </li>
              <li>{navItem.list4}</li>
            </ul>

          </ul>        
      )
    }
  }



class Nav extends Component {
    render() {
        return (
              <div className={"nav"} style={{ height:"12vw" }}>
                {navItems.map((navItem,i) => <NavContain key={i} navItem={navItem} />)}
                <div className="downloadFooter">
                  <div>
                    <img src={require("../../../assets/images/iosQr.png")} />
                    <p>苹果下载</p>
                  </div>
                  <div>
                    <img src={require("../../../assets/images/andriodQr.png")} />
                    <p>安卓下载</p>
                  </div>
                </div>
              </div>
        );
    }
}

class RiskWarning extends Component{
  state={
    text1:"风险警告：保证金交易具高风险，投资者考虑投资金额时需视乎自身的能力。投资有盈有亏，您可能因此损失全部本金。",
    text2:"保证金交易不壹定适合所有投资者，交易前请确认您已完全了解相关风险。"
  }
  render(){
    return (
      <div className={"riskWarning"} style={{ height:"5vw" }}>
          <p>{this.state.text1}</p>
          <p>{this.state.text2}</p>
      </div>
    )
  }
}


class CopyRight extends Component{
  state={
    text:"财经期货＠2019 集团有限公司版权所有，不得转载",
  }
  render(){
    return(
      <div className={"copyRight"}>{this.state.text}</div>
    )
  }
}

class Footer extends Component {
  render() {
      return (
          <div className={'footerFC'}>
            <Nav/>
            <RiskWarning/>
            <CopyRight/>
          </div>
      );
  }
}



export default Footer;