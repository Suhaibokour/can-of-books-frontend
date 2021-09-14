// import React from 'react';
// import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
// import { withAuth0 } from "@auth0/auth0-react";
// import Footer from './Footer';
// import Login from './Login';
// // import MyFavoriteBooks from './MyFavoriteBooks';
// import Profile from './Profile';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// class App extends React.Component {

//   render() {
//     console.log('app', this.props);
//     const { isAuthenticated } = this.props.auth0;
//     return(
//       <>
//         <Router>
//           <IsLoadingAndError>
//             <Header />
//             <Switch>
//               <Route exact path="/">
//                 {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
             
//                 {
//                   !isAuthenticated && (
//                     <Login />
//                   )
//                 }
            
//                           </Route>
//               {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
//               <Route exact path="/profile">
//               {
//                   isAuthenticated && (
//                     <Profile />
//                   )
//                 }
//               </Route>
          
          
//             </Switch>
//             <Footer />
//           </IsLoadingAndError>
//         </Router>
//       </>
//     );
//   }
// }

// export default withAuth0(App);


import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Profile from './Profile';
import BestBooks from './BestBooks';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginButton from './components/loginButton';
import MyForm from './components/bookForm';
class App extends React.Component {
  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            {/* <MyForm /> */}
            <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBooks /> : <LoginButton />}
            </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile"> <Profile/>
              </Route>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}
export default withAuth0(App);