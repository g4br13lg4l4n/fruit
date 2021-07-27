import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "../styles/styles";
import Icons from "./Icons";

const Product = ({ navigation, props }) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Product')}
                style={styles.productContainer}>
                <Image
                    source={{uri: props.image}}
                    style={styles.cardItemProductImage}
                />
                <View>
                    <Text style={styles.fontWeightBold}>{ props.title }</Text>
                    <View style={styles.textProductContainer}>
                        <Text style={[{ marginRight: 10 }, styles.fontWeightBold]}>${props.price} / UNID</Text>
                        <View style={styles.plusBtn}>
                            <Icons icon={'plusIcon'} w={24} h={24}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Product;