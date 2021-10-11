import React, { Component } from 'react'
import { Row,Col} from 'reactstrap'
import CategoryList from '../categories/CategoryList'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12">
                     <CategoryList/>
                    </Col>
                  
                </Row>
            </div>
        )
    }
}