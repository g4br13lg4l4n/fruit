import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import BarUp from '../components/BarUp';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp />
        <View>
          
        </View>
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default Home;
