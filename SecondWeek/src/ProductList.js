import React, { Component } from "react";
import { Col, Row, Container, Card, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg" style={{ marginTop: "8px" }}>
          <Row>
            {this.props.products.map((product) => {
              return (
                <Col key={product.id} md="4">
                  <Card
                    top
                    style={{
                      width: "20rem",
                      height: "25rem",
                      borderColor: "#7494fb",
                    }}
                  >
                    <Grid item xs={12} sm={3}>
                      <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                          <img src={product.image} alt="" />
                        </Link>
                      </div>
                    </Grid>

                    <Button>
                      <Link
                        to="/cart"
                        className="cart"
                        onClick={() => this.props.addToCart(product)}
                      >
                        Add to cart
                      </Link>
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
