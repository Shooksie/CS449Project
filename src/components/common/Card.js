import React from 'react';

import { View } from 'react-native';


const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#000000',
    borderRadius: 2,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 150,
    opacity: 0.75,
    paddingBottom: 30,
  }
};


export { Card };
