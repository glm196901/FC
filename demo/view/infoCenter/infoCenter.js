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
        

        return(
            <div className="container">
                <TabsControl>

                    <div add="/infocenter/marketinfo" name="行情资讯">
                        社会新闻的内容
                    </div>
                    <div add="/infocenter/dailynews" name="财经日历">
                        体育世界的内容
                    </div>
                    <div add="/infocenter/everyweek" name="每周洞察">
                        娱乐圈的内容
                    </div>
                </TabsControl>
            </div>
            );
    }
}







class Contain extends Component{
    render(){
        return(
            <div className={"contain"}>
                奥术大师大所大大所大所多
            </div>
        )
    }
}





 class InfoCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        // 子路由局部渲染
        const subRoute = this.props.routes;
        return (
            
            <div className="infoCenter">
                <Banner/>
                <TabComponent/>
                {subRoute.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                <Contain/>

                <Footer/>
            </div>
            )
    }

}

export default InfoCenter