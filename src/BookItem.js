import React from 'react';
import './BookItem.css'

class BookItem extends React.Component {
    render() {
        return(
            <div class="results">
            <p>{this.props.item.title}</p>
            <p>{this.props.item.description}</p>
            <p>{this.props.item.status}</p>
            <p>{this.props.item.email}</p>
            <button onClick={() => this.props.deleteBook(this.props.item._id)}>Delete Book</button>
            </div>
        )
    }
}

export default BookItem;