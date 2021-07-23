import React from 'react';
import { SvgXml } from 'react-native-svg';
import icons from '../utils/icons';
import { View, Text } from 'react-native';


const Icons = ({ icon, w = 30, h = 30 }) => {
    if(icons.hasOwnProperty(icon)){
        return <SvgXml xml={icons[icon]} width={w} height={h} /> ;
    }
    return <View><Text> :( </Text></View>;
};

export default Icons;