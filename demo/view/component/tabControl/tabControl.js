import React, { Component } from 'react'
import RouteWithSubRoutes from '../../../../../core/router/router';

import {NavLink} from 'react-router-dom'

import './tabControl.css'

class TabsControl extends React.Component{
	constructor(  ){
		super(  )
		this.state = { 
			currentIndex : 0
		}
	}

	check_title_index( index ){
		return index === this.state.currentIndex ? "tab_title active-tab" : "tab_title"
	}

	check_item_index( index ){
		return index === this.state.currentIndex ? "tab_item show" : "tab_item"
	}

	render(){

		
        let _this = this
        
        // 子路由局部渲染
		const subRoute = this.props.routes;

		let route = window.location.href

		 if(route.includes("infodetials")  ){
			return (
				<div className="infoDetials">
						{ 
							React.Children.map( _this.props.children , ( element,index ) => {
								return(
									<NavLink to={element.props.add} onClick={ () => { _this.setState({ currentIndex : index }) } } className={ _this.check_title_index( index ) }>{ element.props.name} </NavLink>
								
									)
							}) 
							
						}
				</div>
			)
		}else{
			return(
            
				<div>
					{ /* 动态生成Tab导航 */ }
					<div className="tab_title_wrap">
						{ 
							React.Children.map( _this.props.children , ( element,index ) => {
								return(
									<NavLink to={element.props.add} onClick={ () => { _this.setState({ currentIndex : index }) } } className={ _this.check_title_index( index ) }>{ element.props.name} </NavLink>
								
									)
							}) 
							
						}
	
					</div>
					{ /* Tab内容区域 */ }
					{/* <div className="tab_item_wrap">
						{
							React.Children.map(this.props.children,( element,index )=>{
								return(
									<div className={ this.check_item_index( index ) }>{ element }</div>
								)
							})
						}
					</div> */}
	
				</div>
			)
		}

	}
}



export default TabsControl
