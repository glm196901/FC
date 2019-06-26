// import {Contracts, Custom} from "../../../../pro/contract";
import {Table} from 'antd'

import React, { Component } from 'react'
import {exposure, spy} from "../../../../../../core/store";
import {Contracts, Custom} from "../../../../../../pro/contract";
import {EVENT} from "../../../../../../pro/event";





 class ChartTable extends Component {
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
            goodsCode:''

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




    render() {



          const quotation = [
            {
              title: '商品名称',
              dataIndex: "name",
              
            },
            {
              title: '当前价',
              dataIndex: 'price',
              key:"price",
              render:(price,key)=>{
                  let up = {color : "#F14F55"}
                  let down = {color : "#48B30F"  }
                  return (
                      <div key={key} style={key.isUp === false? down : up}>{key.isUp=== false ? price + "⬇"  :  price +"⬆" }</div>
                  )
              }
            },
            {
              title: '涨跌',
              dataIndex : "gap",
              render: (gap) => {
                  let diff = Object(gap)[0]
                    let up = {color : "#F14F55"}
                    let down = {color : "#48B30F"}
                    return(
                        <div style={diff === "+" ? up : down } key={gap}>{gap}</div>
                    )
              }
            },
            {
             title: '涨跌幅',
             dataIndex: 'rate',
             render: rate => {
                let diff = Object(rate)[0]
                  let up = {color : "#F14F55"}
                  let down = {color : "#48B30F"  }
                  return(
                      <div style={diff === "+" ? up : down } key={rate}>{rate}</div>
                  )
            }
            },
            {
             title: '最低',
             dataIndex: 'min',
            },
            {
            title: '最高',
                dataIndex: 'max',
           },
           {
            title: '持仓',
                dataIndex: 'holdVolume',
           }
          ]


        return (
            <div className={'homePage'}>
                <main>
                    <div className={'mainLeft'}>
                        <div className={'quotationBox'}>
                            {this.props.name === "国际期货"?  <Table  pagination={false}  columns={ quotation} dataSource={ this.state.foreignArray } locale={{emptyText:"获取中"}} /> : "" }  
                            {this.props.name === "股指期货"?  <Table  pagination={false}  columns={ quotation} dataSource={ this.state.stockArray }  locale={{emptyText:"获取中"}} /> : "" }  
                            {this.props.name === "国内期货"?  <Table  pagination={false} columns={ quotation} dataSource={ this.state.domesticArray }  locale={{emptyText:"获取中"}} /> : "" }  
                        </div>
                    </div>
                </main>
            </div>
        )
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
        });
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
                // console.log(Custom.stockBrief)

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



}

export default ChartTable