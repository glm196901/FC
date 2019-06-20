import React, {Component} from 'react';

import './stockindex.sass'

import THead from '../component/tHead/tHead'

 class StockIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }  
    render() {
        return (
            <div className="stockIndex">    
                <THead title="股指期货" />
            </div>
        )
    }

}

export default StockIndex