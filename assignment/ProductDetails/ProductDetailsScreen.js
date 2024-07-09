import React, {useState, useRef} from "react";
import { StyleSheet, View, ScrollView, Animated, Dimensions } from "react-native";
import Header from "./Header";
import ProductInfo from "./ProductInfo";
import Footer from "./Footer";
import Sidebar from "../Components/Sidebar";
import { useRoute } from "@react-navigation/native";

const screenWidth = Dimensions.get('window').width;

export default function ProductDetails(){

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarAnimation = useRef(new Animated.Value(-screenWidth/2)).current;
    const route = useRoute();
    const {product} = route.params;

    const toggleSidebar = () => {
        if (sidebarVisible) {
            Animated.timing(sidebarAnimation, {
                toValue: -screenWidth/2,
                duration: 300,
                useNativeDriver: false,
            }).start(() => setSidebarVisible(false))
        } else{
            setSidebarVisible(true);
            Animated.timing(sidebarAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    }


    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
            <Header toggleSidebar={toggleSidebar}/>
            <ProductInfo product={product}/>
            </ScrollView>
            <Footer/>

            {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} sidebarAnimation={sidebarAnimation}></Sidebar>}
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


