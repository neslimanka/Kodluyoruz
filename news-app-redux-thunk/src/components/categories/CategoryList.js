import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardImg, Container, Row, Col } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as newsActions from "../../redux/actions/newsActions";
import "../css/styles.css";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getNews(category.id)
  };

  render() {
    return (
      <div>
        <h3> Categories</h3>

        <Container>
          <Row>
            {this.props.categories.map((category) => {
              return (
                <Col key={category.id}>
                  <Card
                    active={category.id === this.props.currentCategory.id}
                    onClick={() => this.selectCategory(category)}
                    key={category.id}
                  >
                    <CardImg card src={category.image} alt="Card image cap" />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>

        <h5>Seçili Kategori : {this.props.currentCategory.name}</h5>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
//action abağlanmak için
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getNews:bindActionCreators(
        newsActions.getNews,
        dispatch
        )
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
