import React, {Component} from 'react';
import { Table, Rate, Button, Radio, Icon } from 'antd';
    

import { completeNum } from '../../../../lib/utils';
import { CSvg } from '../../../../components/common/svg';
import month from './../../assets/svg/month.svg'
import THead from '../component/tHead/tHead'

import './calender.scss'


import './dailyNews.sass';
import 'antd/dist/antd.css';


import { Pagination } from 'antd';
import {EVENT} from './../../../../pro/event/index'



class MonthView extends Component{

    constructor(props){
        super(props);

        this.state = {
            show:null,
            
        }
    }
    render(){
        return(
            <div className="top">
                <div className="month">
                    <span>{this.props.thisMonth}月</span>
                    <CSvg src={month} svgClassName={'iconStyle month'} wrapperClassName={'monthWrap'}/>
                </div>
                <div className={'date'}>
                    {
                        this.props.weekTime().map((item, key) => {
                            return (
                                <div key={key} className={this.props.today === item.show ? 'active' :''}
                                    onClick={()=>{
                                        this.setState({
                                            show : item.show
                                        })
                                        this.props.update({today:item.show,date:item.val});
                                    }}>
                                    <div>{item.week.replace('星期','')}</div>
                                    <div><span>{item.show}</span></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}





 class DailyNews extends Component {

    constructor(props){
        super(props);
        this.state = {
            thisMonth:null,
            today:this.diff(0).show,
            calender:[],
            starArr:[1,2,3],
        }
    }


    componentWillMount(){
        this.today = this.diff(0).val;
        this.month = this.diff(0).show;
        this.getWeekTime()
        this.updateCalender({today:this.month,date:this.today});
    }

    componentdidMount(){

    }

    async updateCalender ({today,date}) {
        try {
            today && this.setState({today:today});
            await EVENT.Info.updateFinanceCalender(date);
            this.setState({calender:EVENT.Info.calender.news.newsData},()=>{
                let d = new Date();
                // (January gives 0)
                let n = d.getMonth() + 1 ;
                this.setState({thisMonth:n});
                let data = this.state.calender
                data.map((item , i)=>{

                    if(item.unit === "%"){
                        if(item.consensus  != null){
                            item.consensus += "%"
                        }
                        if(item.actual != null){
                            item.actual += "%"

                        }
                        if(item.previous != null ){
                            item.previous += "%"
                        }

                    }
                    if(item.consensus === null ){
                        item.consensus="未公布"
                    }
                    if(item.actual === null){
                        item.actual = "未公布"

                    }
                    if(item.previous === null){
                        item.previous = "未公布"

                    }
                                        
              })
            });
        } catch (error) {
            EVENT.Error.throw(error);
        }
    }




    diff(v) {
        let now = new Date();
        let date = new Date(now.getTime() + v * 24 * 3600 * 1000);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = completeNum(month);
        let day = date.getDate();
        day = completeNum(day);
        //todo 计算当前月的时常

        let obj = {};
        obj.show = day;
        obj.val = year.toString() + month.toString() + day.toString();
        let week = ["日", "一", "二", "三", "四", "五", "六"];
        obj.week = '星期' + week[date.getDay()];
        obj.today = v === 0;
        obj.monthLength = new Date(year, month, 0).getDate();
        return obj;
    }

    //todo 获取一周内数据
    getWeekTime = () => {
        let ary = [], num = -7;
        for(let i =0 ;i < 7; i++){
            num ++;
            ary.push(this.diff(num))
        }
        return ary
    }

    render() {
        console.log('lllllll')

          const columns = [
            {
              title: '时间',
              dataIndex: "time_show",
              
            },
            {
              title: '事件',
              dataIndex: 'title',
            },
            {
              title: '前值',
              dataIndex : "previous",
            },
            {
             title: '今值',
             dataIndex: 'actual',
            },
            {
             title: '预期',
             dataIndex: 'consensus',
            },
            {
                dataIndex:"star",
                render: star => {
                    return(
                        <Rate disabled defaultValue={ star }  />
                    )
                }
            }
          ]

        
        return (
            <div className="dailyNews">

                <MonthView thisMonth={this.state.thisMonth} weekTime={this.getWeekTime} today={this.state.today} update={({today,date})=>this.updateCalender({today:today,date:date})}/>


                <THead title="财经数据" />
                
                <Table  columns={ columns} dataSource={ this.state.calender } pagination={{ pageSize: 20, showQuickJumper:true }} locale={{emptyText:"获取中"}} />    
                        
                            
            </div>
        )
    }

}

export default DailyNews