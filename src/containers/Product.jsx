import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import BarUp from '../components/BarUp';
import styles from '../styles/styles';
import Icons from '../components/Icons';
import CustomButton from '../components/CustomButton';

const Product = ({ navigation }) => {
	const [isSelected, setSelection] = useState(false);
	return (
		<SafeAreaView style={styles.containerSafeArea}>
			<ScrollView style={styles.scrollView}>
				<BarUp navigation={navigation} />
				<View style={[styles.containerScreen]}>
					<View style={styles.productImageContainer}>
						<Image
							source={require('../../assets/platano1.png')}
							style={styles.productImage}
						/>
					</View>
					<View style={styles.discriptionProductContainer}>
						<Text style={[styles.fontWeightBold, styles.productTitle]}>Platano macho</Text>
						<Text style={styles.productDescription}>Descripción del producto u observaciones, lorem ipson textto de relleno, texto del producto y cosas mas</Text>
						<View style={styles.rowPriceContainer}>
							<View style={styles.priceCheckContainer}>
								<CheckBox
									value={isSelected}
									onValueChange={setSelection}
									tintColors={{ true: '#6FCF97', false: '#A8A7A7' }}
								/>
								<View style={{ marginLeft: 4 }}>
									<Text style={[styles.fontWeightBold, styles.sizeTypeSellText]}>Caja</Text>
									<Text style={[styles.fontWeightBold]}>$18.32 / KG</Text>
								</View>
							</View>
							<View>
								<View style={styles.addRemoveProductContainer}>
									<TouchableOpacity>
										<Text style={styles.addRemoveProductBtnText}>
											<Icons icon={'minusBlackIcon'} />
										</Text>
									</TouchableOpacity>
									<Text style={styles.addRemoveProductBtnText}>1</Text>
									<TouchableOpacity>
										<Text style={styles.addRemoveProductBtnText}>
											<Icons icon={'plusBlackIcon'} />
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={styles.rowPriceContainer}>
							<View style={styles.priceCheckContainer}>
								<CheckBox
									value={isSelected}
									onValueChange={setSelection}
									tintColors={{ true: '#6FCF97', false: '#A8A7A7' }}
								/>
								<View style={{ marginLeft: 4 }}>
									<Text style={[styles.fontWeightBold, styles.sizeTypeSellText]}>Caja</Text>
									<Text style={[styles.fontWeightBold]}>$18.32 / KG</Text>
								</View>
							</View>
							<View>
								<View style={styles.addRemoveProductContainer}>
									<TouchableOpacity>
										<Text style={styles.addRemoveProductBtnText}>
											<Icons icon={'minusBlackIcon'} />
										</Text>
									</TouchableOpacity>
									<Text style={styles.addRemoveProductBtnText}>1</Text>
									<TouchableOpacity>
										<Text style={styles.addRemoveProductBtnText}>
											<Icons icon={'plusBlackIcon'} />
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>

					</View>
				</View>
				
			</ScrollView>
			<View style={[styles.productsOptionsBtnContainer, styles.containerScreen]}>
					<CustomButton
						onPress={() => navigation.navigate('Home')}
						title={'Agregar'}
						styleButton={[styles.greenBorderBtn, { marginRight: 10}]}
						styleText={styles.greenButtonText}
					/>
					<CustomButton
						onPress={() => navigation.navigate('Home')}
						title={'Comprar'}
						styleButton={[styles.greenBtn, { marginLeft: 10}]}
						styleText={styles.whiteButtonText}
					/>
				</View>
		</SafeAreaView>
	);
}

export default Product;
