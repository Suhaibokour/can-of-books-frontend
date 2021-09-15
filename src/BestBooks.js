import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import BookItem from './BookItem'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './BookItem.css'
import Update from './components/Update';
import Form from 'react-bootstrap/Form';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favBooksArr: [],
      showFlag: false,
      title: '',
      description: '',
      status: '',
      email: '',
      id: ''
    }
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email = user.email;
    axios.get(`http://localhost:3030/getBooks?email=${email}`)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }


  addBookHandler = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    let email = user.email;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      email: email,
      status: event.target.status.value

    }
    axios.post(`http://localhost:3030/addBooks`, obj)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })


  }


  deleteBook = (id) => {
    const { user } = this.props.auth0;
    let email = user.email;
    axios.delete(`http://localhost:3030/deleteBooks/${id}?email=${email}`)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('erorr')
      })
  }

  handleClose = () => {
    this.setState({
      showFlag: false
    })
  }

  showModalUpdate = (item) => {
    this.setState({
      showFlag: true,
      title: item.title,
      description: item.description,
      status: item.status,
      email: item.email,
      id: item._id
    })
  }

  updateBook=(event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    let email = user.email;
    const obj={
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email:email,
      id:this.state.id
    }
    axios
    .put(`http://localhost:3030/updateBooks/${this.state.id}`,obj)
    .then(result=>{
      this.setState({
        favBooksArr: result.data,
        showFlag: false
      })
    })
    .catch(err=>{
      console.log('erorr')
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={this.addBookHandler}>
          
            <legend>Add Book</legend>
            <Form.Label>Book title</Form.Label>
            <Form.Control type="text" name="title" placeholder="title here" />
            <br />
            <br />
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" placeholder="description here" />
            <br />
            <br />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name="email" placeholder="email@rhyta.com" />
            <br />
            <br />
            <Form.Label>Status</Form.Label>
            <br />
            <select name="status" id="status" placeholder="Select status">
              <option value="science">science</option>
              <option value="novels">novels</option>
              <option value="history">history</option>
            </select>
            <br />
            <br />
            <Button type='submit'>Add book</Button>
          
        </Form>

        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.favBooksArr.map(item => {
          return (

            <div >
              <BookItem class="results"

                item={item}
                deleteBook={this.deleteBook}
                showModalUpdate={this.showModalUpdate}
              />

            </div>



          )
        })}
        <Update
          show={this.state.showFlag}
          handleClose={this.handleClose}
          title={this.state.title}
          description={this.state.description}
          status={this.state.status}
          email={this.state.email}
          updateBook={this.updateBook}
        />

        {/* <Col>
                    <Card style={{ width: '18rem' }}>
                       
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                          
                          <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Button onClick={this.addBookHandler} variant="primary">Add book</Button>
                        </Card.Body>
                    </Card>
                </Col> */}




      </>

    )
  }
}

export default withAuth0(MyFavoriteBooks);