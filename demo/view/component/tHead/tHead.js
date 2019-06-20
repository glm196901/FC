import React, { Component } from 'react'

import '../tHead/tHead.sass'

class THead extends Component {
    render() {
        return (
            <div className="tHead">
                {this.props.title}
            </div>
        )
    }
}

export default THead