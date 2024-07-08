import { StyleSheet, Image, View } from "react-native";

export default function Header(){
    return (
    <View style={styles.container}>
        <View>
            <Image style={styles.menu} source={require('../assets/Menu.png')}></Image>
        </View>
        <View>
            <Image style={styles.logo} source={require('../assets/Logo.png')}></Image>
        </View>

        <View style={styles.iconsContainer}>
            <Image style={styles.search} source={require('../assets/Search.png')}></Image>
            <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')}></Image>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 10,
        flexDirection: 'row',
        borderColor: 'black',
        width: '100%',
    },

    menu: {
        width: 30,
        height:33
    },

    logo:{
        width: 99,
        height: 40,
        left: 21
    },
    
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    search:{
        width: 30,
        height: 30, 
        marginRight: 20
    },

    shoppingBag: {
        width: 30,
        height: 30
    },
    
    button: {
        position: 'relative',
    }
})