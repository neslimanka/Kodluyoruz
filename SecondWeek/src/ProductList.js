import React, { Component } from "react";
import {
  CardBody,
  CardTitle,
  CardImg,
  Col,
  Container,
  Row,
  Card,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <br />
        <Container>
          <Row>
            {this.props.products.map((product) => {
              return (
                <Col key={product.id} md="6">
                  <Card
                    top
                    style={{
                      width: "15rem",
                      height: "34rem",
                      borderColor: "#7494fb",
                    }}
                  >
                    <CardBody>
                      <CardImg
                        width="50%"
                        height="35%"
                        src={product.image}
                        alt="Card image cap"
                      />
                      <CardTitle tag="h5">{product.title}</CardTitle>
                    </CardBody>
                    <Button onClick={() => this.props.addToCart(product)}>
                      Add to Cart
                    </Button>
                    <Button color="warning">
                      <Link to="Stories">Details</Link>
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
