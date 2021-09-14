// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { withAuth0 } from "@auth0/auth0-react";



// class MyForm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//         }

//     }

//         addBook = (event) => {
//             event.preventDefault();
            
//         }


//         render() {
//             return (

//                 <Form onSubmit={this.addBook} style={{ padding: 20 }}>
//                     <Form.Group className="mb-3" controlId="horns">

//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="text" name="email" placeholder="name@example.com" />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                             <Form.Label id="title" >Book title</Form.Label>
//                             <Form.Control type="text" name="title" id="title" />

//                         </Form.Group>


//                         <Form.Select name="status" id="status" style={{ width: '18rem' }}   >
//                             <option  >CHoose status</option>

//                             <option value="1">Romance</option>
//                             <option value="2">Action</option>
//                             <option value="3">Comedy</option>

//                         </Form.Select>
//                     </Form.Group>
//                     <Button type="submit">Submit form</Button>
//                 </Form>
//             )
//         }
    

// }

// export default MyForm;