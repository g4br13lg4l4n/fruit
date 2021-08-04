import React, { useContext } from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import BarUp from '../components/BarUp';
import Categories from '../components/Categories';
import ListProducts from '../components/ListProducts';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';
import AppContext from '../context/AppContext';
import { CommonActions } from '@react-navigation/native';

const resetNavigator = (navigation) => {
  setTimeout(() => {
    navigation.dispatch(state => {
      const routes = state.routes.filter(r => r.name !== 'LoadingScreen');
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }, 1000);
}

const Home = ({ navigation }) => {
  resetNavigator(navigation);
  const { inputFind, filterProducts } = useContext(AppContext);
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerScreen}>
          <View style={{ marginBottom: 18 }}>
            <Text style={styles.titleHome}>Elige el producto</Text>
            <Text style={styles.titleHomeStrong}>que deseas</Text>
          </View>
          <TextInput
            style={styles.inputSearch}
            onChangeText={(inputFind) => filterProducts(inputFind)}
            value={inputFind}
            placeholderTextColor="#A8A7A7"
            placeholder="Buscar producto"
          />
        </View>
        <Categories />
        <ListProducts navigation={navigation} />
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default Home;
