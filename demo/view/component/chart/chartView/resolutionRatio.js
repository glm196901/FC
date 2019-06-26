import React,{Component} from 'react';
import {Chart} from '../../../../../../pro/chartTV/chart'

import './resolutionRatio.sass';

class ResolutionRatio extends Component{
    team = [
        {
            name:'分时',
            key:'sline'
        },
        {
            name:'日线',
            key:'1D'
        },
        {
            name:'1分',
            key:'1'
        },
        {
            name:'3分',
            key:'3'
        },
        {
            name:'5分',
            key:'5'
        },
        {
            name:'15分',
            key:'15'
        },
    ];
    constructor(props){
        super(props);
        this.state = {
            select:'sline'
        }
    }
    render(){
        return(
            <div className={'element-chartBar'}>
                <ul>
                    {
                        this.team.map(({name,key})=>{
                            return(
                                <li key={key}>
                                    <div className={this.state.select===key?'active':''} onClick={()=>{this.selectType(key)}} key={key}>{name}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    selectType(key){
        if(key !== 'dynamic'){
            if(!Chart.table){
                return;
            }
            this.props.dynamic('hide');
            Chart.swap({type:key});
        }else{
            this.props.dynamic('show')
        }
        this.setState({select:key});
    }
}

export default  ResolutionRatio