import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

import { images } from '../../../constants';


export default function Banner() {
    return(
        <View>
            <Image className="w-full h-40" source={images.laptopbn}/>
        </View>
    );
}

  
