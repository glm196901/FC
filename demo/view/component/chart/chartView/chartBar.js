import React, { Component } from 'react'


import Chart from '../../../../../../pro/chartTV/chart'
import {exposure, spy} from "../../../../../../core/store";
import {Contracts, Custom} from "../../../../../../pro/contract";
import {EVENT} from "../../../../../../pro/event";



import './chartBar.sass'

 class ViewBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            foreignArray: [],
            domesticArray: [],
            stockArray: [],
            selfArray: [],
            allArray: [],
            select: "",
            contract:'',
            name:'',
            goodsCode:'',
            itemActive: 0,


        };
        if (Contracts.initial) {
            this.state.foreignArray = Custom.foreignBrief;
            this.state.stockArray = Custom.stockBrief;
            this.state.domesticArray = Custom.domesticBrief;
            this.state.selfArray = Custom.selfBrief;
            this.state.allArray = Custom.allBrief;
            let [o] = Contracts.foreignArray;
            this.state.contract = o.contract;
            this.state.name = o.name;
            this.state.goodsCode = o.code;
            this.state.hot = Contracts.hot;
            this.state.news = Contracts.new;
            Custom.start('customUpdate');
        } else {
            spy('contractsInitial', this.updateContracts, this, Contracts.initial);
        }

     }

     componentDidMount(){
        EVENT.Quote.whileUpdated(()=>{
            this.setState(EVENT.Quote.getDynamic())
        },this)
    }

    componentWillUnmount(){
        EVENT.Quote.pullout(this)
    }



    componentDidMount() {
        spy('customUpdate',this.updateBrief,this);
    }


     //todo 初始化
     updateContracts() {
        let [o] = Contracts.foreignArray;
        this.setState({
            contract: o.contract,
            name: o.name,
            goodsCode: o.code,
            foreignArray: JSON.parse(JSON.stringify(Custom.foreignBrief)),
            stockArray: JSON.parse(JSON.stringify(Custom.stockBrief)),
            domesticArray: JSON.parse(JSON.stringify(Custom.domesticBrief)),
            selfArray: JSON.parse(JSON.stringify(Custom.selfBrief)),
            allArray: JSON.parse(JSON.stringify(Custom.allBrief)),
            hot: Contracts.hot,
            news: Contracts.new
        },()=>console.log(this.state.foreignArray));
        Custom.start('customUpdate')
    }

    //todo 数据刷新
    updateBrief() {
        this.setState((state) => {
            Custom.foreignBrief.map((newItem, newIndex) => {
                state.foreignArray.map((item, index) => {
                    if (index === newIndex) {
                        parseFloat(newItem.price) - parseFloat(item.price) > 0 ? newItem['up'] = -1 :
                            (parseFloat(newItem.price) - parseFloat(item.price) === 0 ? newItem['up'] = 0 : newItem['up'] = 1)
                    }
                })
            });

            Custom.stockBrief.map((newItem, newIndex) => {
                state.stockArray.map((item, index) => {
                    if (index === newIndex) {
                        parseFloat(newItem.price) - parseFloat(item.price) > 0 ? newItem['up'] = -1 :
                            (parseFloat(newItem.price) - parseFloat(item.price) === 0 ? newItem['up'] = 0 : newItem['up'] = 1)
                    }
                })
            });
                console.log(Custom.stockBrief)

            Custom.domesticBrief.map((newItem, newIndex) => {
                state.domesticArray.map((item, index) => {
                    if (index === newIndex) {
                        parseFloat(newItem.price) - parseFloat(item.price) > 0 ? newItem['up'] = -1 :
                            (parseFloat(newItem.price) - parseFloat(item.price) === 0 ? newItem['up'] = 0 : newItem['up'] = 1)
                    }
                })
            });
            return {
                foreignArray: JSON.parse(JSON.stringify(Custom.foreignBrief)),
                stockArray: JSON.parse(JSON.stringify(Custom.stockBrief)),
                domesticArray: JSON.parse(JSON.stringify(Custom.domesticBrief)),
                selfArray: JSON.parse(JSON.stringify(Custom.selfBrief)),
                allArray: JSON.parse(JSON.stringify(Custom.allBrief))
            }
        });
    }




     render(){
         return(
             <div className="viewBar">
                <div  className="viewSelect"  >
                {this.state.foreignArray.map((v, k )=>{
                    return(
                        <div className="item" key={k}  onClick={()=>{ this.setState({itemActive : k }, ()=>{ console.log(v) }) }}  className={`item ${this.state.itemActive === k ? 'bottomColor':'bottomNoColor'}`}   >
                            <div className="itemTitle">
                                {v.name}
                            </div>
                            <div className={`itemPrice ${v.isUp === true ? 'up' : 'down' }`}  >
                                {v.isUp=== true ? v.price + "⬆"  :  v.price +"⬇" }
                            </div>
                            <div className={`changeDegree ${v.isUp === true ? 'up' : 'down' }`}>
                                <span>{v.difference + ""} </span>
                                <span>{v.rate}</span>
                            </div>
                        </div>
                    )
                }) }
                </div>
                <div  className="viewItem">
                    {this.props.name}
                </div>
             </div>
         )
     }






 }


class ChartBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names:["国际期货", "股指期货", "国内期货"],
            select: 0,
            active: true,
            color : {background : "rgba(231,206,126,0.5)"},
            none: {background : "" }
        }
    }


    render() {
        return (
            <div className="chartBar">
                <div className="selectBar">
                    <div className="selectTitle">
                        热门行情
                    </div>
                    {this.state.names.map( (name,key)=>{
                        return(
                            <div  key={key} className={`marketName ${this.state.select === key ? "marketIsStyle" : "marketNoStyle" } `} onClick={ ()=>{this.setState({select: key}) }  }  >{ name }</div>
                        )
                    } )}
                </div>
                {this.state.select === 0 ? <ViewBar name={this.state.names[0]}></ViewBar> : ""}
                {this.state.select === 1 ? <ViewBar name={this.state.names[1]}></ViewBar> : ""}
                {this.state.select === 2 ? <ViewBar name={this.state.names[2]}></ViewBar> : ""}
            </div>
        )
    }


}

export default ChartBar