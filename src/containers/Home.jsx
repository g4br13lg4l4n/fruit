import React from 'react';
import { View, SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import BarUp from '../components/BarUp';
import Categories from '../components/Categories';
import ListProducts from '../components/ListProducts';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';

const Home = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp />
        <View style={styles.containerScreen}>
          <View style={{ marginBottom: 18 }}>
            <Text style={styles.titleHome}>Elige el producto</Text>
            <Text style={styles.titleHomeStrong}>que deseas</Text>
          </View>
          <TextInput
            style={styles.inputSearch}
            onChangeText={onChangeNumber}
            value={number}
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
