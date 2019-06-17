import React, {Component} from 'react';



import Header from '../common/header/header'
import Footer from '../common/footer/footer'

import './download.sass'



class Banner extends Component{
    render(){
        return(
            <div className={"banner"} >
                 <Header/>               
            </div>
        )
    }
}

class Contain extends Component{
    render(){
        return( 
            <div className={"contain"}>
                                奥术大师大所大大所大所多

            </div>
        )
    }
}

 class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className={"download"}>
                <Banner/>
                <Contain/>                
                <Footer/>
            </div>
        )
    }

}

export default Download