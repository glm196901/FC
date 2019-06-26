import React, {Component} from 'react';

import RouteWithSubRoutes from '../../../../core/router/router';


import Header from '../common/header/header'
import Footer from '../common/footer/footer'


import TabsControl from '../component/tabControl/tabControl'



import './introduce.sass'





class Banner extends Component{
    render(){
        return(
            <div className={"brief"}  >
                <Header/>
            </div>
        )
    }
}

class TabComponent extends React.Component{

   
    render(){
        return(
            <div className="container">
                <TabsControl style={ { width:"50%" } }>
                    <div  add="/introduce/brief" name="公司简介"></div>
                    <div  add="/introduce/advantages" name="公司优势"></div>
                </TabsControl>
            </div>
            );
    }
}



 class Introduce extends Component {
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

                <Footer/>
            </div>
            )
    }

}

export default Introduce