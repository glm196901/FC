import React, {Component} from 'react';
import {EVENT} from "../../../../pro/event/index";
import ReactDOM from 'react-dom';
import { Pagination } from 'antd';



import '../../style/commonStyle/commonStyle.sass'    
import './marketInfo.sass'

class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detial:[],
            list:[]
        };

    }




    async componentDidMount() {
        this.updateNews(0)

    }

    async updateNews(type,date,animate=false){
        try {
            await EVENT.Info.updateNews(type,date,animate);
            if (!!date) {
                //加载更多
                let data = this.state.list.concat(EVENT.Info.newsList);
                this.setState({list:data});
            } else {
                //刷新
                this.setState({list:EVENT.Info.newsList});
                this.state.list.map((data, i)=>{
                    this.getNewsDetail(data.id)

                })
            }
        } catch (error) {
            EVENT.Error.throw(error);
        }
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

                // console.log(this.state.detial)
            }
        } catch (error) {
            EVENT.Error.throw(error);
        }
    }

    click = () => {         
            let i
             console.log(i)  
             console.log(this.state.list) 
    }


      

    render(){

        function onChange(pageNumber) {
            console.log('Page: ', pageNumber);
            alert(pageNumber)
          }

        return(
            <div className="news">
                {   
                    this.state.list.map((list, i) => {
                        if(i<3){                      
                            return(

                                <div  key={i} className="newsTop3" onClick={ ()=> console.log(list.id)}>
                                    <img className="imgTop3" src={ list.thumb } />
                                    <div className="titleTop3" style={ {background: "rgba(0,0,0,0.4) " } }>
                                        <marquee >
                                            {list.title}
                                        </marquee>
                                    </div>
                          
                                </div>
                            )
                        }else{
                            return(
                                <div   key={i} className="newsContent" onClick={ ()=> console.log(list.id)}  >
                                    <img className="imgrest" src={ list.thumb }/>
                                    <div className="titleText">
                                        <div className="titleRest">
                                            {list.title}
                                        </div>
                                        <div className="dateRest">
                                                {list.date} 
                                        </div>
                                    </div>

                                </div>
                                )
                        }
                    })                       
                }
                              <Pagination 
            
            current={0}
             pageSize={20}
             defaultPageSize={20}
            total={this.state.list.length}
             pageSizeOptions={["8"]}
             onChange={this.changeNum}
             onShowSizeChange={this.changePageSize}
             showSizeChanger
             showTotal={(e)=>{return "共 "+e+" 条"}}
            />
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