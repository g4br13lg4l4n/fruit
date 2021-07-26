import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import Icons from "./Icons";

const RoundButton = ({color = '#fff', icon, w = 28, h=28}) => {
    const backGround = {backgroundColor: color}
    return(
        <TouchableOpacity style={[styles.roundButton, backGround]}>
            <Icons icon={icon} w={w} h={h}/>
        </TouchableOpacity>
    );
}

export default RoundButton;
