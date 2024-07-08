import { StyleSheet, View, Image, Text } from "react-native";

export default function ProductInfo(){
    return (
        <View style={styles.container}>
            <View>
            <Image source={require('../assets/dress4.png')} style={styles.productImage} />
            </View>

            <View style={styles.productTitles}>
                <Text style={styles.name}>LAMEREI</Text>
                <Text style={styles.subtitle}>Recycle Boucle Knit Cardigan Pink</Text>
                <Text style={styles.price}>$120</Text>
            </View>

            <View>
                <Image style={styles.export} source={require('../assets/Export.png')}></Image>
            </View>

            <View style={styles.materials}>
                <Text style={styles.heading}>Materials</Text>
                <Text style={styles.description}>We work with monitoring programmes to ensure compliance with safety, health and quantity standards for our products.</Text>
            </View>

            <View style={styles.instructionsContainer}>
                <Image style={styles.icon} source={require('../assets/Do Not Bleach.png')}></Image>
                <Text style={styles.bleach}>Do Not Bleach</Text>
                
                <Image style={styles.icon} source={require('../assets/Do Not Tumble Dry.png')}></Image>
                <Text style={styles.dry}>Do Not Tumble Dry</Text>

                <Image style={styles.icon} source={require('../assets/Do Not Wash.png')}></Image>
                <Text style={styles.bleach}>Dry clean with tetrachloroethylene</Text>

                <Image style={styles.icon} source={require('../assets/Iron Low Temperature.png')}></Image>
                <Text style={styles.bleach}>Iron at a maximum of 110°C/230°F</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 33,
        bottom: 4,
        
      },

    productImage:{
        width: 370,
        height: 460,
        bottom: 80,
        alignSelf: 'center'
    },

    productTitles: {
        flex: 1,
        position: 'absolute',
        bottom: 205,
        left: 35
    },

    name: {
        fontSize: 28,
        letterSpacing: 6,
        fontWeight: '400'
    },

    subtitle:{
        fontSize: 18,
        color: '#737373',
        letterSpacing: 1,
        top: 4,
        fontWeight: '400'
    },

    price:{
        fontSize: 30,
        fontWeight: '400',
        color: '#D18035',
        top: 8
    },

    export: {
        bottom: 110,
        left: 160
    },

    materials:{
        left: 23,

    }


})