import React, {Component} from 'react';

import THead from '../component/tHead/tHead'
import ChartTable from '../component/chart/chartTable/chartTable'
    


 class Domestic extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>
                <THead title="国内期货"/>
                <ChartTable name="国内期货"  />
            </div>
        )
    }

}

export default Domestic