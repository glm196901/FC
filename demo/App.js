import React, {Component} from 'react';
import routes from './routes';
import noMatch from '../../core/router/404';

import {BrowserRouter  as Router, Route, NavLink, Switch,Redirect} from 'react-router-dom'
import Home from '../demo/view/home/home'
import Header from '../demo/view/common/header/header'
import Footer from '../demo/view/common/footer/footer'

import RouteWithSubRoutes from '../../core/router/router';

import './index.css'

// 此处全局路由
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {
                            routes.map((route,i)=><RouteWithSubRoutes key={i} {...route} />)
                        }
                        {/* 没有匹配到搜索的路由时的404页面 */}
                        <Route component={noMatch} /> 
                    </Switch>
                </div>
            </Router>
         
        )
    }
}


export default App;
