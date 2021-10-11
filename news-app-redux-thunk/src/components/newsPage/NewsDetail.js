import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as newsPageActions from "../../redux/actions/newsPageActions"
import { connect } from "react-redux";
import { Table} from "reactstrap";

class NewsDetail extends Component {


  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.newsPage.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.author}</td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

//statetleri prop a aktarmam lazım
function mapStateToProps(state) {
  return {
    newsPage: state.newsPageReducer,
  };
}
//action a bağlanmam laızm
function mapDispatchToProps(dispatch) {
  return {
    actions: {
        getNewsPage: bindActionCreators(newsPageActions.getNewsPage, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);