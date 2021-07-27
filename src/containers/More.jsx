import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import BarUp from '../components/BarUp';
import ItemMenu from '../components/ItemMenu';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';

const More = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp />
        <View style={[styles.containerScreen]}>
          <View style={{ marginTop: 30 }}>
            <ItemMenu
              icon={'userIcon'}
              title={'Mi Perfil'}
              text={'Configura tu cuenta'} />
          </View>
          <View style={{ marginTop: 30 }}>
            <ItemMenu
              icon={'phoneIcon'}
              title={'Cambiar celular'}
              text={'Actualiza tu número de teléfono'} />
          </View>
          <View style={{ marginTop: 30 }}>
            <ItemMenu
              text={'Termino y condiciones'} />
          </View>
          <View style={{ marginTop: 30 }}>
            <ItemMenu
              text={'Políticas de privacidad'} />
          </View>
        </View>
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default More;
