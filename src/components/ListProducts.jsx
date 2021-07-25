import React from "react";
import { View } from 'react-native';
import styles from "../styles/styles";
import Product from "./Product";

const ListProducts = ({ navigation }) => {

    return (
        <View style={[styles.containerScreen, styles.listProductsContainer]}>
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
           <Product navigation={navigation} />
        </View>
    );
}

export default ListProducts;