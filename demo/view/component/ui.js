import React, {Component} from 'react';
import './ui.scss';
import {CSvg} from "../../../../components/common/svg";

export class Button extends Component {
    constructor(props) {
        super(props);
        this.config = Object.assign({
            className: '',
            event() {
            }
        }, props);
    }

    render() {
        return (
            <div className={`P-focused-button ${this.config.className}`} onTouchEnd={() => {
                this.config.event()
            }}>
                <div className={'layer'}/>
                <div className={'text'}>{this.props.children}</div>
            </div>
        )
    }
}

export class Header extends Component{
    render(){
        return(
            <div className={'P-header'}>
                
                {this.props.title}
                </div>
        )
    }
}