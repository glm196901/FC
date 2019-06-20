import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import RouteWithSubRoutes from '../../../../core/router/router';


import Header from '../common/header/header'
import Footer from '../common/footer/footer'


import './marketCneter.sass'
import '../../style/commonStyle/commonStyle.sass'

import TabsControl from '../component/tabControl/tabControl'
    



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
        

        return(
            <div className="container">
                <TabsControl>
                    <div add="/marketcenter/international" name="国际期货">
                        体育世界的内容
                    </div>
                    <div add="/marketcenter/stockindex" name="股指期货">
                        社会新闻的内容
                    </div>
                    <div add="/marketcenter/domestic" name="国内期货">
                        娱乐圈的内容
                    </div>
                </TabsControl>
            </div>
            );
    }
}










 class MarketCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        // 子路由局部渲染
        const subRoute = this.props.routes;
        return (
            
            <div className="marketCenter">
                <Banner/>
                <TabComponent/>
                <div className="commonStyle">
                    {subRoute.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </div>
                <Footer/>
            </div>
            )
    }

}

export default MarketCenter