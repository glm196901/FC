import React, {Component} from 'react';


import LineTitle from '../component/lineTitle/lineTitle' 

import './brief.sass'



class ModuleBrief extends Component{
    render(){
        return(
            <div className="moduleBrief">
                <LineTitle titleUp="公司介绍" titleDown="COMPANY PROFILE"></LineTitle>
                <div className="companyProfile">
                    <img className="picLeft" src={require("../../assets/images/briefGray.png")} />
                    <div className="picRight" >
                        <div className="words">
                            <p>香港总公司</p>
                            <p className="shortLine"></p>
                            <p className="briefTxt">本公司扎根香港、放眼全球，凭借集团稳健雄厚的实力，
                                在业界建立了强大的网络，除了活跃于香港股票及期货市场外，
                                业务范围更伸展到多个期货期权投资市场，我们始终以传统经纪业务为根基，
                                在巩固市场优势地位的同时，持续推动业务转型升级，打造期货市场综合金融服务平台，
                                并获得期货投资咨询业务资格、资产管理业务资格、基金销售业务资格和股票期权交易参与人资格，
                                公司总部设立在香港。</p>
                            <p className="briefTxt">
                            本公司长期以来深入贯彻落实中国证监会“期货市场服务产业经济和国民经济”的精神，
                            着力打造人才集聚平台、技术领先平台、业务创新平台和科学管理平台。
                            在金融期货和众多主要商品期货品种上具有极高的市场份额；我司针对客户的不同需求量身定制个性化、差异化服务，
                            以拓展及服务内地客户对香港及全球国际期货的需求，致力于为客户提供更专业、更优质和更可靠的服务。                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




class TimeLine extends Component{
    render(){

        return(
                <div className="timeContainer">
                    <ul className="timeHorizontal">
                        <li ><b></b> <p >2017.8成立於香港</p> </li>
                        <li ><b></b><p>2017.12与国际交易所签订合作协议</p></li>
                        <li ><b></b><p>2018.5与国内交易所签订合作协议</p></li>
                        <li ><b></b><p>2018.11上線原油期貨商品</p></li>
                        <li ><b></b><p>我们始终坚持前进的步伐</p></li>
                    </ul>
                </div>
        )
    }
}


class ModuleDev extends Component{
    render(){
        return(
            <div className="moduleDev">
                 <LineTitle titleUp="发展历程" titleDown="DEVELOPMENT HISTORY"></LineTitle>      
                 <TimeLine/>         
            </div>
        )
    }
}



class CultureCard extends Component{
    render(){
        return(
            <div className="cardBox">
                <div className="smallCard" style={ this.props.positionSmall}></div>
                <div className="bigCard" style={this.props.positionBig}>{this.props.slogan}</div>
            </div>
        )
    }
}


class ModuleCulture extends Component{
    render(){
        return(
            <div className="moduleCulture">
                 <LineTitle titleUp="企业文化" titleDown="CORPORATE CULTURE"/>
                 <div style={ { marginTop:'5vw'} }>
                    <CultureCard positionBig={ {margin:"0 24vw"} } positionSmall={ {margin:"0 26vw", top:"1vw"}}  slogan="诚信" />   
                    <CultureCard positionBig={ {margin:"-1vw 0 0 39vw"} } positionSmall={ {margin:" 0 46vw", top:"1.5vw"}} slogan="专业"  /> 
                    <CultureCard positionBig={ {margin:"0 54vw"} } positionSmall={ {margin:" 0 56vw", top:"2.5vw"}}  slogan="创新" /> 
                    <CultureCard positionBig={ {margin:"-1vw 0 0 69vw"} } positionSmall={ {margin:" 0 76vw"}}  slogan="发展" /> 
                 </div>
                <div className="sum">
                    <p >
                    <span className="common charStart">“</span> 公司坚持诚信务实，稳健经营、规范管理，切实的站在客户的立场．从客户的利益出发．确保客户资金和交易信息的安全，从而实现双赢。公司
                    </p>
                    <p>
                        秉承“诚信、专业、创新、发展”的经营理念，以风险控制为前提、以市场为导向、以客户为中心、以效益为目标，追求可持续发展，
                    </p>
                    <p>
                        力争发展成为“资本充足、运作安全、管理规范、服务优质、效益良好、有核心竞争力”的现代金融服务企业。    
                    </p>
                    <p style={{ marginTop: "-1.5vw"}}>
                        传播期货知识，培养和成就投资人，与客户共同成长。<span className="common charEnd">”</span> 
                    </p>
                </div>

            </div>
        )
    }
}



 class Brief extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>
                <ModuleBrief/>
                <ModuleDev/>
                <ModuleCulture/>
            </div>
            )
    }

}

export default Brief