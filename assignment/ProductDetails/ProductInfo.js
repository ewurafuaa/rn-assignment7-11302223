import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ProductInfo() {

    const route = useRoute();
    const { product } = route.params;

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={product.image} style={styles.productImage} />
            </View>

            <View style={styles.productTitles}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>

            <View style={styles.exportContainer}>
                <Image style={styles.export} source={require('../assets/Export.png')} />
            </View>



            <View style={styles.materials}>
                <Text style={styles.heading}>MATERIALS</Text>
                <Text style={styles.subtitle}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
            </View>



            <View style={styles.instructionsContainer}>
                <View style={styles.instruction}>
                    <Image style={styles.instructionIcon} source={require('../assets/Do Not Bleach.png')} />
                    <Text style={styles.instructionText}>Do not use bleach</Text>
                </View>
                
                <View style={styles.instruction}>
                    <Image style={styles.instructionIcon} source={require('../assets/Do Not Tumble Dry.png')} />
                    <Text style={styles.instructionText}>Do not tumble dry</Text>
                </View>

                <View style={styles.instruction}>
                    <Image style={styles.instructionIcon} source={require('../assets/Do Not Wash.png')} />
                    <Text style={styles.instructionText}>Dry clean with tetrachloroethylene</Text>
                </View>

                <View style={styles.instruction}>
                    <Image style={styles.instructionIcon} source={require('../assets/Iron Low Temperature.png')} />
                    <Text style={styles.instructionText}>Iron at a maximum of 110°C/230°F</Text>
                </View>
            </View>



            <View style={styles.line}></View>



            <View style={styles.shippingContainer}>
                <Image style={styles.shippingIcon} source={require('../assets/Shipping.png')}></Image>
                <Image style={styles.arrow} source={require('../assets/Up.png')}></Image>
                <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
                <Text style={styles.estimatedDelivery}>Estimated to be delivered on</Text>
                <Text style={styles.date}>09/11/2021 - 12/11/2021.</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },

    productImage: {
        width: 370,
        height: 460,
    },

    productTitles: {
        marginBottom: 1,
        alignItems: 'left',
        top: 5,
        left: 15
    },

    name: {
        fontSize: 28,
        letterSpacing: 6,
        fontWeight: '400',
    },

    description: {
        fontSize: 18,
        color: '#737373',
        marginTop: 4,
        fontWeight: '400',
    },

    price: {
        fontSize: 30,
        fontWeight: '400',
        color: '#D18035',
        marginTop: 8,
    },

    exportContainer: {
        alignItems: 'flex-end',
        bottom: 99,
        right: 13
    },

    export: {
        width: 24,
        height: 24,
    },

    materials: {
        marginBottom: 20,
        alignItems: 'left'
    },

    heading: {
        fontSize: 20,
        letterSpacing: 3,
        fontWeight: '400',
        left: 17
    },

    subtitle: {
        fontSize: 18,
        marginTop: 10,
        left: 17,
        color: '#737373',
    },

    instructionsContainer: {
        marginTop: 10,
    },

    instruction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        left: 17
    },

    instructionIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
        tintColor: '#737373',
    },

    instructionText: {
        fontSize: 16,
        color: '#737373',
    },

    line: {
        height: 1,
        backgroundColor: '#737373',
        marginVertical: 20,
        width: 310,
        left: 20,
        opacity: '0.3'
    },

    shippingIcon:{
        left: 20,
    },

    shippingText: {
        bottom: 44,
        left: 55,
        fontWeight: '400'
    },

    estimatedDelivery: {
        bottom: 35,
        left: 55,
        color: '#737373',
    },

    date:{
        bottom: 30,
        left: 55,
        color: '#737373',
    },
    arrow: {
        bottom: 20,
        left: 340
    }




});
