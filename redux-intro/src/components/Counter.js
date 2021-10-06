import React, { Component } from 'react'
import { connect } from 'react-redux' //redux a bağlanmamı sağlayacak

 class Counter extends Component {
    //bana bir state bilgisi lazım . Ama ben bunu nereden alacağım?Reduxtan
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {counter:state.counterReducer} //state bilgisini counterReducer dan çek
}
export default connect(mapStateToProps)(Counter); //-->Counter ın proplarına state i bağla