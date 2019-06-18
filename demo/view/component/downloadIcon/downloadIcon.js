import React, { Component } from 'react'


import './downloadIcon.sass'

class DownloadIcon extends Component{
    render(){

        return(
            <div className="downloadIcon"  onMouseEnter={this.props.onMouseEnter}  style={ this.props.styles}>
                <img src={this.props.src} />
                <div >{this.props.text}</div>
            </div>
        )
    }
}

export default  DownloadIcon