import React, {Component} from 'react';
import {EVENT} from "../../../../pro/event/index";
import ReactDOM from 'react-dom';
import { Button, Icon} from 'antd';
import {NavLink} from 'react-router-dom'
import {hashHistory} from 'react-router-dom';


import {Req} from "../../../../pro/network/Req";

import '../../style/commonStyle/commonStyle.sass'    
import './marketInfo.sass'





class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detial:[],
            list:[],
            date:[],
            id:null,
            path:"",
            lastestId:null
        };
    }

     async updateNews(type,date,size,animate = false){
        this.setState({list:[]});
        this.setState({id:null});
        
        return new Promise(async (resolve,reject)=>{
            try {
                const result = await Req({
                    url: '/api/news/newsList.htm',
                    type: 'GET',
                    data: {
                        type: type,
                        date: date,
                        size: size
                    },
                    animate: animate
                });
                this.newsList = result.newsList;
                // console.log(this.newsList)
                this.setState({date:[this.newsList[0].date, this.newsList[7].date]});
                let data = this.state.list.concat(this.newsList);
                this.setState({list: data, lastestId: data[0].id});
                // console.log(this.state.date)
                this.forceUpdate()
                resolve()
            } catch (error) {
                reject(error)
            }
        })

    }


    async componentWillMount() {

        this.updateNews(0,null,8)
    }

    
    render(){

        return(
            <div className="news">
                {   
                    this.state.list.map((list, i) => {
                        if(i<3){                      
                            return(

                                <NavLink  to={this.state.path}   key={i} className="newsTop3"  onMouseEnter={ ()=> this.setState({id:list.id, path:`/infocenter/infodetials&${list.id}&<=${this.state.lastestId}`}) }   >
                                    <img className="imgTop3" src={ list.thumb } />
                                    <div className="titleTop3" style={ {background: "rgba(0,0,0,0.4) " } }>
                                        <marquee >
                                            {list.title}
                                        </marquee>
                                    </div>
                                </NavLink>
                                
                            )
                        }else{
                            return(
                                <NavLink  to={this.state.path}   key={i} className="newsContent" onMouseEnter={ ()=> this.setState({id:list.id, path:`/infocenter/infodetials&${list.id}&<=${this.state.lastestId}`}) }  >
                                    <img className="imgrest" src={ list.thumb }/>
                                    <div className="titleText">
                                        <div className="titleRest">
                                            {list.title}
                                        </div>
                                        <div className="dateRest">
                                                {list.date} 
                                        </div>
                                    </div>

                                </NavLink>
                                )
                        }
                    })                       
                }
                <Button.Group className="pageBtn">
                        <Button className="pre" onClick={   ()=> { this.updateNews(0,this.state.date[0],8)} } type="primary">
                            <Icon type="left" />上一页
                        </Button>
                        <Button className="next" onClick={  ()=> { this.updateNews(0,this.state.date[1],8)} } type="primary">
                            下一页<Icon type="right" />
                        </Button>
                </Button.Group>
            </div>
            
        )
    }
}
    
 class MarketInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detial:[]
        };

    }

    async getNewsDetail(type,date,animate=false){

        try {
            await EVENT.Info.getNewsDetail(type,date,animate);
            if (!!date) {
                //加载更多
                let detial = this.state.detial.concat(EVENT.Info.newsDetail);
                this.setState({detial:detial});

            } else {
                //刷新
                this.setState({detial:EVENT.Info.newsDetail});
            }
        } catch (error) {
            EVENT.Error.throw(error);
        }
    }

    render() {
        return (
            <div className="commonStyle">
                <News  />
            </div>
        )
    }

}

export default MarketInfo