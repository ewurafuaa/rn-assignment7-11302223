import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import ProductInfo from "./ProductInfo";
import Footer from "./Footer";

export default function ProductDetails(){
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
            <Header/>
            <ProductInfo/>
            </ScrollView>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },

    scroll:{
        flexGrow: 1
    }
})


