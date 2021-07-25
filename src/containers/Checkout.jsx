import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import BarUp from '../components/BarUp';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';

const Checkout = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp title={'Canasta de compras'} />
        <View style={[styles.containerScreen]}>
          <View style={styles.listChekoutProducts}>
            <View>
              <Image
                source={require('../../assets/platano.png')}
                style={styles.imgListChekoutProducts}
              />
            </View>
            <View>
              <View>
                <Text style={[styles.fontWeightBold]}>Platano macho maduro</Text>
              </View>
              <View style={styles.priceOptionsContainer}>
                <View>
                  <Text style={[styles.fontWeightBold]}>Estandar - Caja</Text>
                  <Text style={[styles.fontWeightBold]}>1 UNID</Text>
                  <Text style={[styles.fontWeightBold]}>$18.50</Text>
                </View>
                <View>
                  <Text>1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default Checkout;
