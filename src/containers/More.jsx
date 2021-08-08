import React from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import BarUp from '../components/BarUp';
import ItemMenu from '../components/ItemMenu';
import TabNavigator from '../components/TabNavigator';
import resetRouter from '../hooks/resetRouter';
import styles from '../styles/styles';
import StoreData from '../utils/StoreData';

const More = ({ navigation }) => {
  const closeSesion = () => {
    StoreData.removeToken()
      .then(resp => {
        resetRouter(navigation, 'Inicio');
      })
      .catch(err => {
        console.log('err =>', err);
      })
  }
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp navigation={navigation} />
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
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity onPress={() => closeSesion()}>
              <ItemMenu
                text={'Cerrar sesión'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

export default More;
