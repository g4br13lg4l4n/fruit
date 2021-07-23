import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import BarUp from '../components/BarUp';
import styles from '../styles/styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.containerBar}>
      <ScrollView style={styles.scrollView}>
        <BarUp />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
