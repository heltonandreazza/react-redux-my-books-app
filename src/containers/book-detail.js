import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <div>
          <h6>Details for:
            {this.props.book.title}
          </h6>
        </div>
        <div>
          <h6>Pages:
            {this.props.book.pages}
          </h6>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);