import React, { Component } from 'react'
import { Row,Col} from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import NewsList from "../news/NewsList";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="6">
                     <CategoryList/>
                    </Col>
                    <Col xs="6">
                     <NewsList/>
                    </Col>
                  
                </Row>
            </div>
        )
    }
}