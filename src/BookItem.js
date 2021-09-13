import React from 'react';

class BookItem extends React.Component {
    render() {
        return(
            <>
            <p>{this.props.item.title}</p>
            <p>{this.props.item.description}</p>
            <p>{this.props.item.status}</p>
            <p>{this.props.item.email}</p>
            </>
        )
    }
}

export default BookItem;