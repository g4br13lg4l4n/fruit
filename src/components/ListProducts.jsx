import React, { useContext } from "react";
import { View } from 'react-native';
import styles from "../styles/styles";
import Product from "./Product";
import AppContext from '../context/AppContext';

const ListProducts = ({ navigation }) => {
    const { state } = useContext(AppContext);
    const { products, inputFind, productsFiltered } = state;

    console.log('inputFind --->', inputFind);

    const RenderProducts = () => {
        if(inputFind === '') {
            return products.map(row => {
                return <Product navigation={navigation} props={row} id={row.id}/>
            });   
        } else {
            return productsFiltered.map(row => {
                return <Product navigation={navigation} props={row} id={row.id}/>
            });
        }
    }

    return (
        <View style={[styles.containerScreen, styles.listProductsContainer]}>
           <RenderProducts />
        </View>
    );
}

export default ListProducts;