import React from 'react';
import { View, SafeAreaView, ScrollView , Text} from 'react-native';
import BarUp from '../components/BarUp';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';

const More = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp />
        <View>
          <Text>Mas</Text>
        </View>
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default More;
