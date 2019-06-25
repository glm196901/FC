import React, { Component } from 'react'
import {EVENT} from "../../../../pro/event/index";
import ReactDOM from 'react-dom';   
import { Button, Icon} from 'antd';
import {Req} from "../../../../pro/network/Req";


import './infoDetials.sass'








class InfoDetials extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:null,
            lastestId:null,
            detial:""
        };

    }


    async getNewsDetail(id , position){
        return new Promise (async(resolve,reject)=>{
            try {
                const result = await Req({
                    url: '/api/news/newsDetail.htm',
                    type: 'GET',
                    data:{
                        id
                    },
                    animate: true
                });

                this.newsDetail = result.news;
                let detial = this.newsDetail
                this.setState({detial:detial});
                // console.log(detial.content)  
                if(this.newsDetail.content === ""){
                    if(position === "pre" ){
                        this.getNewsDetail(this.state.id-=1, "pre")
                    }else if(position === "next" && this.state.id <= this.state.lastestId){
                        this.getNewsDetail(this.state.id+=1, "next")
                    }else{
                        alert("已经更新到最新的新闻")
                    }
                }
                resolve();
            } catch (error) {
                reject(error);
                if( position === "pre"   ){
                    this.getNewsDetail(this.state.id-=1, "pre")  
                }else if(position === "next" &&  this.state.id <= this.state.lastestId){
                    this.getNewsDetail(this.state.id+=1, "next")
                }else{
                    alert("已经更新到最新的新闻")
                }
            }
        })
    }


    componentWillMount() {

        let ip = window.location.href
        let id = ip.split("&")[1].split("<")[0] 
        let lastestId = ip.split("=")[1]
        console.log(id)
            id = Number(id) 
            lastestId = Number(lastestId) 
        this.setState({id:id, lastestId:lastestId})
        this.getNewsDetail(id, null)
        console.log(typeof(id))
     }



    render() {
        return (
            <div className="infoDetials"  >
                <div className="detialTitle">{this.state.detial.title}</div>
                <div className="detialDate" >{this.state.detial.date}</div>
                <div className="detialTxt" dangerouslySetInnerHTML={{ __html: this.state.detial.content}}></div>
                <Button.Group className="pageBtn">
                        <Button className="pre" onClick={ ()=> {  this.getNewsDetail(this.state.id-=1,"pre") }  } type="primary">
                            <Icon type="left" />上一篇
                        </Button>
                        <Button className="next" onClick={  ()=> {  this.getNewsDetail(this.state.id+=1, "next") } } type="primary">
                            下一篇<Icon type="right" />
                        </Button>
                </Button.Group>
            </div>
        )
    }
}

export default InfoDetials