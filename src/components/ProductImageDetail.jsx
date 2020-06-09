import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import CostBgProdDetail from '../components/CostBgProdDet'

const ProductImageDetail = (props) => {
    return (

        < View style={styles.container}>
                 <Image source={require('../images/ImageRandom.png')} style={styles.image}/>
                             
                
            
     </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",    
        paddingLeft: 20,
        paddingRight:20,
        borderColor: '#FFD739',
        borderWidth: 8,
        borderRadius: 20

    },
    image: {
        flex: 1,
        alignItems: "center", 
        width: 180, 
        height: 180,

     
    },
});

export default ProductImageDetail;
