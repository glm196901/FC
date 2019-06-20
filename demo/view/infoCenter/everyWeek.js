import React, {Component} from 'react';
import {EVENT} from "../../../../pro/event";
import { completeNum } from '../../../../lib/utils';
import THead from '../component/tHead/tHead'
import ReactDOM from 'react-dom';
import { Timeline } from 'antd';

import '../../style/commonStyle/commonStyle.sass'    

import './everyWeek.sass'




 class EveryWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };

    }
    componentWillMount(){
        this.updateLive()
    }
    async updateLive() {
        try{
            await EVENT.Info.updateLive(0);
            setTimeout(() => this.setState({
                data: EVENT.Info.getLives(),
            }), 0);
        }catch (err){
            EVENT.Error.throw(err);
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
        obj.regDate = year.toString()+ "-" + month.toString() + "-" +  day.toString();
        obj.val = year.toString() + month.toString() + day.toString();
        let week = ["日", "一", "二", "三", "四", "五", "六"];
        obj.week = '周' + week[date.getDay()];
        obj.today = v === 0;
        obj.monthLength = new Date(year, month, 0).getDate();
        return obj;
    }

    render() {
        return (
            <div className="commonStyle">
                <THead title="资讯直播" />
                    <Timeline  className="liveStyle" >
                    <div className="currentDate">{this.diff(0).week} {this.diff(0).regDate}</div>
                         {this.state.data.map((data,i) =>{
                                    return (   
                                        <Timeline.Item key={i} data={data} >
                                            <div className="content">
                                                <div className="currentTime">{data.date.split(" ")[1].slice(0,5)}</div>
                                                <div dangerouslySetInnerHTML={{__html:data.content}}></div>
                                            </div>

                                        </Timeline.Item>
                                  
                                        )
                             })}
                    </Timeline>

    

             
            </div>
        )
    }





}

export default EveryWeek