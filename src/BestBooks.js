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
import MyForm from './components/bookForm';
import './BookItem.css'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favBooksArr: []
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
    const obj={
      title:event.target.title.value,
      email:email,
      status:event.target.status.value

    }
    axios.post(`http://localhost:3030/addBooks`,obj)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })


  }


  deleteBook=(id)=>{
    const { user } = this.props.auth0;
    let email = user.email;
     axios.delete(`http://localhost:3030/deleteBooks/${id}?email=${email}`)
     .then(result=>{
       this.setState({
         favBooksArr: result.data
       })
     })
     .catch(err =>{
       console.log('erorr')
     })
  }


  render() {
    return (
      <>
        <form onSubmit={this.addBookHandler}>
          <fieldset>
            <legend>Add Book</legend>
            <input type="text" name="title" />
            <input type="text" name="email" />
            <select name="status" id="status">
              <option value="science">science</option>
              <option value="novels">novels</option>

              <option value="history">history</option>
            </select>

            <button type='submit'>Add book</button>
            

          </fieldset>
        </form>

        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.favBooksArr.map(item => {
          return (
            
              <div >
                <BookItem class="results"

                  item={item}
                  deleteBook = {this.deleteBook}
                />
                
              </div>
            


          )
        })}


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