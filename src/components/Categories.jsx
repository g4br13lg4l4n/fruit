import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AppContext from "../context/AppContext";
import styles from "../styles/styles";

const Categories = ({}) => {
    const { state, setCategory } = useContext(AppContext);
    const { category } = state;

    return(
        <View style={styles.categoriesContainer}>
            <Text style={styles.categoryTextTitle}>Categorías</Text>
            <View style={styles.listCategoryContainer}>
                <TouchableOpacity
                        onPress={() => setCategory('Frutas')}
                        style={[styles.cardCategory, category === 'Frutas' ? styles.cardCategoryActive : styles.cardCategoryText ]}>
                    <Image
                        source={require('../../assets/fruit.png')}
                        style={styles.cardCategoryImage}
                    />
                    <Text 
                        style={[styles.textAlignCenter, category === 'Frutas' ? styles.cardCategoryActiveText : styles.cardCategoryText]}>Frutas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setCategory('Verdura')}
                    style={[styles.cardCategory, category === 'Verdura' ? styles.cardCategoryActive : styles.cardCategoryText ]}>
                    <Image
                        source={require('../../assets/vd.png')}
                        style={styles.cardCategoryImage}
                    />
                    <Text 
                        style={[styles.textAlignCenter, category === 'Verdura' ? styles.cardCategoryActiveText : styles.cardCategoryText]}>Verduras</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setCategory('Legumbre')}
                    style={[styles.cardCategory, category === 'Legumbre' ? styles.cardCategoryActive : styles.cardCategoryText ]}>
                    <Image
                        source={require('../../assets/lg.png')}
                        style={styles.cardCategoryImage}
                    />
                    <Text 
                        style={[styles.textAlignCenter, category === 'Legumbre' ? styles.cardCategoryActiveText : styles.cardCategoryText]}>Legumbres</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Categories;