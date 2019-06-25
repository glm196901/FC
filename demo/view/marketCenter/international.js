import React, {Component} from 'react';

import THead from '../component/tHead/tHead'    

import ChartTable from '../component/chart/chartTable/chartTable'
 class International extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    
    render() {
        return (
            <div className="international">
            <THead title="国际期货" /> 
            <ChartTable name="国际期货"  />
            </div>
        )
    }

}

export default International