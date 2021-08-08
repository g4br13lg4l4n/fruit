import React from "react";
import { TouchableOpacity, Text, View } from "react-native"; 
import styles from "../styles/styles";
import Icons from "./Icons";

const ItemMenu = ({icon, title, text }) => {
    return(
        <View style={styles.itemMenuContainer}>
            {icon ? <Icons icon={icon} w={33} h={33}/>: null}
            <View style={{ marginLeft: 12 }}>
                {title ? <Text style={styles.titleItemMenuContainer}>{title}</Text>: null}
                {text ? <Text style={styles.textItemMenuContainer}>{text}</Text>: null}
            </View>
            <View style={styles.iconItemMenuContainer}>
                <Icons icon={'rightIcon'}/>
            </View>
        </View>
    );
}

export default ItemMenu;