import React from 'react';
import './BookItem.css'
import Button from 'react-bootstrap/Button';

class BookItem extends React.Component {
    render() {
        return(
            <div class="results">
            <p>{this.props.item.title}</p>
            <p>{this.props.item.description}</p>
            <p>{this.props.item.status}</p>
            <p>{this.props.item.email}</p>
            <Button onClick={() => this.props.deleteBook(this.props.item._id)}>Delete Book</Button>
            <Button onClick={() => this.props.showModalUpdate(this.props.item)}>Update Book</Button>
            </div>
        )
    }
}

export default BookItem;