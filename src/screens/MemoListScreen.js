import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();

    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then((querySnapshot) => {
        const tempList = [];

        querySnapshot.forEach((doc) => {
          tempList.push(doc.data());
        });
        this.setState({ memoList: tempList });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={ this.state.memoList } navigation={this.props.navigation} />
        <CircleButton onPress={ this.handlePress.bind(this) }>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});
