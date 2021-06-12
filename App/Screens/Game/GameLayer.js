import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './GameLayerStyle';

// import { useGlobals } from '../../contexts/Global';

const GameLayer = ({ navigation, route }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
    </SafeAreaView>
  );
};

export default GameLayer;