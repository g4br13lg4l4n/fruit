import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import BarUp from '../components/BarUp';
import RoundButton from '../components/RoundButton';
import TabNavigator from '../components/TabNavigator';
import styles from '../styles/styles';
import CustomButton from '../components/CustomButton';
const Checkout = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.scrollView}>
        <BarUp title={'Canasta de compras'} />
        <View style={{ marginBottom: 240 }}>
          <View style={[styles.containerScreen, styles.checkoutContainer]}>
            <View style={styles.removeProductBtn}>
              <RoundButton color={'#FF0036'} icon={'xIcon'} />
            </View>
            <View style={styles.listChekoutProducts}>
              <View>
                <Image
                  source={require('../../assets/platano.png')}
                  style={styles.imgListChekoutProducts}
                />
              </View>
              <View style={{ flex: 1 }}>
                <View>
                  <Text style={[styles.fontWeightBold, { flex: 1 }]}>Platano macho maduro, super maduro</Text>
                </View>
                <View style={styles.priceOptionsContainer}>
                  <View>
                    <Text>Estandar - Caja</Text>
                    <Text>1 UNID</Text>
                    <Text style={[styles.fontWeightBold, { fontSize: 16 }]}>$18.50</Text>
                  </View>
                  <View style={styles.optionsItemContainer}>
                    <RoundButton color={'#6FCF97'} icon={'plusIcon'} />
                    <Text>1</Text>
                    <RoundButton color={'#6FCF97'} icon={'minusIcon'} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.containerScreen, styles.checkoutContainer]}>
            <View style={styles.removeProductBtn}>
              <RoundButton color={'#FF0036'} icon={'xIcon'} />
            </View>
            <View style={styles.listChekoutProducts}>
              <View>
                <Image
                  source={require('../../assets/platano.png')}
                  style={styles.imgListChekoutProducts}
                />
              </View>
              <View style={{ flex: 1 }}>
                <View>
                  <Text style={[styles.fontWeightBold, { flex: 1 }]}>Platano macho maduro, super maduro</Text>
                </View>
                <View style={styles.priceOptionsContainer}>
                  <View>
                    <Text>Estandar - Caja</Text>
                    <Text>1 UNID</Text>
                    <Text style={[styles.fontWeightBold, { fontSize: 16 }]}>$18.50</Text>
                  </View>
                  <View style={styles.optionsItemContainer}>
                    <RoundButton color={'#6FCF97'} icon={'plusIcon'} />
                    <Text>1</Text>
                    <RoundButton color={'#6FCF97'} icon={'minusIcon'} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.containerScreen, styles.checkoutContainer]}>
            <View style={styles.removeProductBtn}>
              <RoundButton color={'#FF0036'} icon={'xIcon'} />
            </View>
            <View style={styles.listChekoutProducts}>
              <View>
                <Image
                  source={require('../../assets/platano.png')}
                  style={styles.imgListChekoutProducts}
                />
              </View>
              <View style={{ flex: 1 }}>
                <View>
                  <Text style={[styles.fontWeightBold, { flex: 1 }]}>Platano macho maduro, super maduro</Text>
                </View>
                <View style={styles.priceOptionsContainer}>
                  <View>
                    <Text>Estandar - Caja</Text>
                    <Text>1 UNID</Text>
                    <Text style={[styles.fontWeightBold, { fontSize: 16 }]}>$18.50</Text>
                  </View>
                  <View style={styles.optionsItemContainer}>
                    <RoundButton color={'#6FCF97'} icon={'plusIcon'} />
                    <Text>1</Text>
                    <RoundButton color={'#6FCF97'} icon={'minusIcon'} />
                  </View>
                </View>
              </View>
            </View>
          </View>          
        </View>
        
      </ScrollView>
      <View style={[styles.containerScreen, styles.resumenContainer]}>
          <View style={styles.listResumen}>
            <Text style={styles.fontWeightBold}>Costo de envío</Text>
            <Text>$0.00</Text>
          </View>
          <View style={styles.listResumen}>
            <Text style={styles.fontWeightBold}>Subtotal</Text>
            <Text>$74.00</Text>
          </View>
          <View style={styles.listResumen}>
            <Text style={styles.fontWeightBold}>Total</Text>
            <Text>$74.00</Text>
          </View>
          <CustomButton 
            title={'Comprar'} 
            styleButton={[styles.greenBtn]}
						styleText={styles.whiteButtonText}/>
        </View>
    </SafeAreaView>
  );
}

export default Checkout;
