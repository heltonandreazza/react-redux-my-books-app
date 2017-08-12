import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map( book => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// connection between redux and react using the
// library react-redux inside this 
// containter(smart component - the one which
// has access to redux state)
function mapStateToProps(state) {
  // whatever is returned will shou up as props
  // inside of Booklist ( see this.props.books inside renderList() )
  return {
    books: state.books
  }
}

// Anything returnd from this function will end up 
// as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is calledd, the result should be
  // passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// promote Booklist from a component to a container
// It needs to know about this new dispatch method,
// selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);