import React, {Component} from 'react';


import THead from '../component/tHead/tHead'

 class StockIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }  
    render() {
        return (
            <div >    
                <THead title="股指期货" />
            </div>
        )
    }

}

export default StockIndex