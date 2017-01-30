import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Alert } from './common';

class Game extends Component {
  state = { Strike: 0, Ball: 0 }

  checkStrikes() {
    if (this.state.Strike === 3) {
      this.setState({ Strike: 0, Ball: 0 });
      //Alert.alert('Out', 'Out', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
    }
  }
  incrementStrike() {
    this.setState({ Strike: this.state.Strike + 1 });
    this.checkStrikes();
  }
  incrementBall() {
    this.setState({ Ball: this.state.Ball + 1 });
  }
  render() {
    return (
    <Card>
      <CardSection><View style={styles.ViewStyle}>
      <Text style={styles.textStyle}> Strike: {this.state.Strike} </Text>
      </View></CardSection>
      <CardSection><View style={styles.ViewStyle}>
      <Text style={styles.textStyle}> Ball: {this.state.Ball}
      </Text></View></CardSection>
      <CardSection><Button onPress={this.incrementStrike.bind(this)}>Strike</Button></CardSection>
      <CardSection><Button onPress={this.incrementBall.bind(this)}> Ball</Button></CardSection>
    </Card>
  );
  }
}

const styles = {
  textStyle: {
    fontSize: 20,

  },
  ViewStyle: {
    flex: 1,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default Game;
