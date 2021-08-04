import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import BarUp from '../components/BarUp';
import ItemMenu from '../components/ItemMenu';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';

const Support = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp  navigation={navigation}/>
        <View style={[styles.containerScreen]}>
          <View style={styles.supportContainer}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require('../../assets/apple.png')}
            />
            <Text style={styles.needHelpTitle}>¿Necesitas ayuda?</Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <ItemMenu
              icon={'whatsappIcon'}
              title={'WhatsApp'}
              text={'Chatea con nosotros'} />
          </View>
          <View style={{ marginTop: 30 }}>
            <ItemMenu
              icon={'contactIcon'}
              title={'Línea de atención al cliente'}
              text={'Llámanos al 99 0023 123'} />
          </View>
        </View>
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default Support;
