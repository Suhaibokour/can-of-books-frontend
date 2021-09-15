import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


 


class Update extends React.Component {

   


        render() {
            return (

                
      <Modal show={this.props.show} onHide={this.props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update book</Modal.Title>
      </Modal.Header>
      <Modal.Body><Form onSubmit={this.props.updateBook}>
          
            <legend>Add Book</legend>
            <Form.Label>Book title</Form.Label>
            <Form.Control type="text" name="title" placeholder="title here" defaultValue={this.props.title} />
            <br/>
            <br/>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" placeholder="description here" defaultValue={this.props.description} />
            <br/>
            <br/>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name="email" placeholder="email@rhyta.com" defaultValue={this.props.email}/>
            <br/>
            <br/>
            <Form.Label >Status</Form.Label>
            <br />
            <select name="status" id="status" placeholder="Select status" defaultValue={this.props.status}>
              <option value="science">science</option>
              <option value="novels">novels</option>
              <option value="history">history</option>
            </select>
            <br/>
            <br/>
            <Button type='submit'>Save changes</Button>
          
        </Form></Modal.Body>
      <Modal.Footer>
       
      </Modal.Footer>
    </Modal>
            )
        }
    

}

export default Update;