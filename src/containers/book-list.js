import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map( book => {
      return (
        <li key={book.title} className="list-group-item">
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

// export the container
export default connect(mapStateToProps)(BookList);