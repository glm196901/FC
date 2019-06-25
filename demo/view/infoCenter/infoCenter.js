import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import RouteWithSubRoutes from '../../../../core/router/router';


import Header from '../common/header/header'
import Footer from '../common/footer/footer'


import TabsControl from '../component/tabControl/tabControl'


import './infoCenter.sass'




class Banner extends Component{
    render(){
        return(
            <div className={"banner"} >
                 <Header/>               
            </div>
        )
    }
}

class TabComponent extends React.Component{

         
    render(){
    let route = window.location.href   
    let id = route.split("&")[1]
    let path = `/infocenter/infodetials&${id}`

    if(route.includes("infodetials") ){
        return(
            <div className="infodetial">
                <span>位置：</span>
                <NavLink className="" to="/infocenter/marketinfo">资讯中心</NavLink>
                <span>></span>
                <NavLink to="/infocenter/marketinfo">行情资讯</NavLink>
                <span>></span>
                <NavLink className="detial" to={path} >咨询详情</NavLink>

                {/* <TabsControl>

                    <div add="/infocenter/marketinfo" name="资讯中心"></div>
                    <div add="/infocenter/marketinfo" name="行情资讯"></div>
                    <div add="/infocenter/infodetials" name="咨询详情"></div>
                </TabsControl> */}
            </div>
            );
    }
    else{
        return(
            <div className="container">
                <TabsControl>
                    <div add="/infocenter/marketinfo" name="行情资讯"></div>
                    <div add="/infocenter/dailynews" name="财经日历"></div>
                    <div add="/infocenter/everyweek" name="每周洞察"></div>
                </TabsControl>
            </div>
            );
    }


    }
}







 class InfoCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:[]
        };

    }

    getDate (newDate) {
        this.setState({
            date: newDate
        })
    }


    render() {
        // 子路由局部渲染
        const subRoute = this.props.routes;
        return (
            
            <div className="infoCenter">
                <Banner/>
                <TabComponent/>
                {subRoute.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                <Footer/>
            </div>
            )
    }

}

export default InfoCenter