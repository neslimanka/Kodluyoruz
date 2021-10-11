import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux"
import * as newsActions from "../../redux/actions/newsActions"
import { Table} from 'reactstrap';
import {Link} from "react-router-dom";


class NewsList extends Component {

  componentDidMount(){
    this.props.actions.getNews();
    
  }

  render() {
    return (
      <div>
       <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>News Name</th>
          <th>Price</th>
          <th>Description</th>
        
         
        </tr>
      </thead>
      <tbody>
        {this.props.news.map(item => (
            <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td><Link to={"/detail/"+ item.id}>{item.title}</Link></td>
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

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    news:state.newsListReducer
  };
}
function mapDispatchToProps(dispatch){
  return{
      actions:{
          getNews:bindActionCreators(newsActions.getNews,dispatch),
          
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsList);