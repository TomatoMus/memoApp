import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Font } from 'expo';

import fontAwesome from '../../assets/fonts/fa-regular-400.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color, onPress } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      const tmp = bgColor;
      bgColor = textColor;
      textColor = tmp;
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                {this.props.children}
              </Text>
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
