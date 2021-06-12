import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './RankDetailStyle';

// import { useGlobals } from '../../contexts/Global';

const RankDetail = ({ navigation, route }) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={[styles.inputContainer, {flex: 1, width: '100%'}]}>  
        <Text>RankDetail</Text>
      </View>
    </SafeAreaView>
  );
};

export default RankDetail;