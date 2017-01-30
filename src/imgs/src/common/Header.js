// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
     <Text style={textStyle} >{ props.headerText }</Text>
     </View>
  );
};

const styles = {
  viewStyle: {
      backgroundColor: '#D3D3D3',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      elevation: 2,
      position: 'relative',

  },
   textStyle: {
      fontSize: 20,
    },
};
//Make the component avalible to other parts of the app

export { Header };
