import React, { Component } from 'react'

import './lineTitle.sass'

// 两条横线中间有文字的样式
class LineTitle extends Component{
    render(){
        return(
            <div className="lineTitle" >
                <div className="lineTitleTitle" >{this.props.titleUp}</div>
                <span className="lineTitleLine" ></span>
                <span className="lineTitletxt" >{this.props.titleDown}</span>
                <span className="lineTitleLine" ></span>
            </div>

        )
    }
}

export default LineTitle