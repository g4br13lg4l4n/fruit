import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const Categories = ({}) => {
    return(
        <View style={styles.categoriesContainer}>
            <Text style={styles.categoryTextTitle}>Categorías</Text>
            <View style={styles.listCategoryContainer}>
                <TouchableOpacity style={styles.cardCategory}>
                    <Image
                        source={require('../../assets/fruit.png')}
                        style={styles.cardCategoryImage}
                    />
                    <Text style={[styles.textAlignCenter, styles.cardCategoryText]}>Frutas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardCategory}>
                    <Image
                        source={require('../../assets/vd.png')}
                        style={styles.cardCategoryImage}
                    />
                    <Text style={[styles.textAlignCenter, styles.cardCategoryText]}>Verduras</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardCategory}>
                    <Image
                        source={require('../../assets/lg.png')}
                        style={styles.cardCategoryImage}
                    />
                    <Text style={[styles.textAlignCenter, styles.cardCategoryText]}>Legumbres</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Categories;