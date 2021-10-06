import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseCounter} from '../redux/actions/counterActions'


class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseCounter);