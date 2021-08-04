import React from 'react';
import { View, SafeAreaView, ScrollView , Text, Image} from 'react-native';
import BarUp from '../components/BarUp';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';

const Orders = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp navigation={navigation} />
        <View style={[styles.containerScreen]}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../../assets/apple.png')}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#444343' }}>Aún no has realizado ningún pedido</Text>
          </View>
        </View>
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default Orders;
