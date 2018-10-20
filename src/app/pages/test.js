import React from 'react'
import firebase from 'firebase';

export default class extends React.Component {

  constructor(props) {
    super(props);
    // <- set up react state
    this.state={cust : ''};
  }


  componentDidMount(){
    
    console.log('DidMount Query Param '+window.location);

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBukARyddI9CRBf6bjtrq6OOeHiEmAKJQY",
    authDomain: "nextfirebaseoffline-5e936.firebaseapp.com",
    databaseURL: "https://nextfirebaseoffline-5e936.firebaseio.com",
    projectId: "nextfirebaseoffline-5e936",
    storageBucket: "nextfirebaseoffline-5e936.appspot.com",
    messagingSenderId: "874152981104"
  };
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    firebase.database().ref().child('testName')
    .on('value', snapshot=>  {
        console.log('DidMount ' + snapshot.val());
  var cust = snapshot.val();

  console.log('DidMount cust' + cust);

  this.setState({cust : cust});
});
  }

  componentWillUnmount(){

    firebase.database().ref().child('testName')
    .off('value', function(snapshot) {
      console.log('InUnmount ');

});
  }

  render() {
    return (
      <div id='mystatusContent'>
       Hello {this.state.cust}
       {/* <span id='custName'> {(this.state.cust === undefined  ) ? "Loading .. " :  this.state.cust.testName }</span> */}
      </div>
    )
  }
 
}
