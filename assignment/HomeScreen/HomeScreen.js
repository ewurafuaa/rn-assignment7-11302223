import React, {useState, useRef} from "react";
import { StyleSheet, View, ScrollView, Animated, Dimensions } from "react-native";
import Header from "./Header";
import OurStory from "./OurStory";
import Products from "./Products";
import Sidebar from "../Others/Sidebar";

const screenWidth = Dimensions.get('window').width;

function HomeScreen({navigation}){

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarAnimation = useRef(new Animated.Value(-screenWidth/2)).current;
    

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
        <Header navigation={navigation} toggleSidebar={toggleSidebar}/>
        <OurStory/>
        <Products/>
        </ScrollView>
        {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} sidebarAnimation={sidebarAnimation} />}
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

export default HomeScreen;