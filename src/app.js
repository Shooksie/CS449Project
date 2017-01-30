import React, { Component } from 'react';
import { View, Image } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import Login from './components/Login';

class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyB-EWHsSyULY3lDs5G7M_2P4UfDDyTTP7E',
    authDomain: 'auth-430da.firebaseapp.com',
    databaseURL: 'https://auth-430da.firebaseio.com',
    storageBucket: 'auth-430da.appspot.com',
    messagingSenderId: '967820873288'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }
  renderContent() {
  switch (this.state.loggedIn) {
    case true:
        return (
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
          Log Out
          </Button>
          </CardSection>
        );
    case false:
        return <Login />;
    default:
      return <Spinner size="large" />;

  }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: null, height: null, flex: 1 }}
          source={require('./imgs/pexels-photo.jpeg')}
        >
        <Header headerText="GeoPixel" />
        {this.renderContent()}
        </Image>
      </View>
    );
  }
}

export default App;
