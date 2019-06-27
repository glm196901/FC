import React, { Component } from 'react'


import {Chart} from '../../../../../../pro/chartTV/chart'
import {exposure, spy} from "../../../../../../core/store";
import {Contracts, Custom, Quote} from "../../../../../../pro/contract";
import {EVENT} from "../../../../../../pro/event";
import {STORE} from "../../../../../../core/store/state";

import ResolutionRatio from '../chartView/resolutionRatio'


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
            dynamic: 'hide',
            code:""

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
            console.log(this.state.foreignArray)
            Custom.start('customUpdate');
        } else {
            spy('contractsInitial', this.updateContracts, this, Contracts.initial);
        }

     }

     componentDidMount(){
        spy('customUpdate',this.updateBrief,this);
        EVENT.Quote.whileUpdated(()=>{
            this.setState(EVENT.Quote.getDynamic())
        },this)

        STORE.listener(STORE.STATE.CONTRACTS).emitter(()=>{
            let code = EVENT.Quote.code;
            Chart.init({
                dom: 'chart',
                code: code,
                height: this._ref.scrollHeight,
                width: this._ref.scrollWidth,
                contract: Contracts,
                preset: 'mobile'
            });
            Quote.start('quoteUpdate', code);
        });

        EVENT.Quote.whileUpdated((val) => {
            if (val === 'init') {
                let code = EVENT.Quote.code;
                Chart.init({
                    dom: 'chart',
                    code: code, 
                    height: this._ref.scrollHeight,
                    width: this._ref.scrollWidth,
                    contract: Contracts,
                    preset: 'mobile'

                });
                Quote.start('quoteUpdate', code);
            }
            if (val === 'switch') {
                Chart.swap({
                    code: EVENT.Quote.code
                });
                Quote.switch(EVENT.Quote.code)
            }
        }, this);

    }

    componentWillUnmount(){
        EVENT.Quote.pullout(this)
        Chart.exit();

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
        },
        // ()=>console.log(this.state.domesticArray)
        );
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
         if(this.props.name === 0){
            return(
                <div className="viewBar">
                   <div  className="viewSelect"  >
                   {this.state.foreignArray.map((v, k )=>{
                       return(
                           <div className="item" key={k}  onClick={()=>{ this.setState({itemActive : k }, ()=>{EVENT.Quote.switch(v.code,EVENT.Quote.simulate)
                            ; this.props.getCode(v.code); console.log(v.code)  }) }}  className={`item ${this.state.itemActive === k ? 'bottomColor':'bottomNoColor'}`}   >
                               <div className="itemTitle">
                                   {v.name}
                               </div>
                               <div className={`itemPrice ${v.isUp === true ? 'up' : 'down' }`}  >
                                   {v.isUp=== true ? v.price + "⬆"  :  v.price +"⬇" }
                               </div>
                               <div className={`changeDegree ${v.isUp === true ? 'up' : 'down' }`}>
                                   <span>{v.gap + ""} </span>
                                   <span>{v.rate}</span>
                               </div>
                           </div>
                       )
                   }) }
                   </div>
                   <div   id="chart" className="viewItem" ref={(e)=>this._ref=e}>
                        
                   </div>
                </div>
            )
         }else if(this.props.name === 1){
            return(
                <div className="viewBar">
                   <div  className="viewSelect"  >
                   {this.state.stockArray.map((v, k )=>{
                       return(
                           <div className="item" key={k}  onClick={()=>{ this.setState({itemActive : k }, ()=>{EVENT.Quote.switch(v.code,EVENT.Quote.simulate);  
                            ; this.props.getCode(v.code); console.log(v.code)   }) }}  className={`item ${this.state.itemActive === k ? 'bottomColor':'bottomNoColor'}`}   >
                               <div className="itemTitle">
                                   {v.name}
                               </div>
                               <div className={`itemPrice ${v.isUp === true ? 'up' : 'down' }`}  >
                                   {v.isUp=== true ? v.price + "⬆"  :  v.price +"⬇" }
                               </div>
                               <div className={`changeDegree ${v.isUp === true ? 'up' : 'down' }`}>
                                   <span>{v.gap + ""} </span>
                                   <span>{v.rate}</span>
                               </div>
                           </div>
                       )
                   }) }
                   </div>
                   <div  id="chart" className="viewItem" ref={(e)=>this._ref=e}>
   
                   </div>
                </div>
            )               
         }else {
            return(
                <div className="viewBar">
                   <div  className="viewSelect"  >
                   {this.state.domesticArray.map((v, k )=>{
                       return(
                           <div className="item" key={k}  onClick={()=>{ this.setState({itemActive : k }, ()=>{EVENT.Quote.switch(v.code,EVENT.Quote.simulate)
                            ; this.props.getCode(v.code);  console.log(v.code)  }) }}  className={`item ${this.state.itemActive === k ? 'bottomColor':'bottomNoColor'}`}   >
                               <div className="itemTitle">
                                   {v.name}
                               </div>
                               <div className={`itemPrice ${v.isUp === true ? 'up' : 'down' }`}  >
                                   {v.isUp=== true ? v.price + "⬆"  :  v.price +"⬇" }
                               </div>
                               <div className={`changeDegree ${v.isUp === true ? 'up' : 'down' }`}>
                                   <span>{v.gap + ""} </span>
                                   <span>{v.rate}</span>
                               </div>
                           </div>
                       )
                   }) }
                   </div>
                   <div  id="chart" className="viewItem" ref={(e)=>this._ref=e}>
                   
                   </div>
                </div>
            )               
         }

     }






 }


class ChartBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names:["国际期货", "股指期货", "国内期货"],
            selectLeft: 0,
            active: true,
            code:"",
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
            dynamic: 'hide',
           
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
                            <div  key={key} className={`marketName ${this.state.selectLeft === key ? "marketIsStyle" : "marketNoStyle" } `} onClick={ ()=>{this.setState({selectLeft: key}, 
                                ()=>{ if(this.state.selectLeft === 0 ){Chart.swap({code:"CL1908"}); }
                                else if(this.state.selectLeft === 1){Chart.swap({code:"IF1907"})}
                                else{Chart.swap({code:"RU1909"}) } } ) }  }  >{ name }</div>
                        )
                    } )}
                </div>
                 <ViewBar   name={this.state.select}></ViewBar> 
                <ResolutionRatio dynamic={(status)=>this.setState({dynamic: status})} />
            </div>
        )
    }


}

export default ChartBar