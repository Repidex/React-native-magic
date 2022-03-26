import React from 'react';
import {View,Text, StyleSheet, Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const DATA = [
    {
        backgroundColor: '#fff',
        image: <Image source={require('../../assests/butterfly1.png')} style={{height:300,width:300}}/>,
        title:<Text style={{fontSize:44, fontFamily:'EBGaramond-SemiBold', fontWeight:'300', color:'#AA2B43'}}>Butterfly</Text>,
        subtitle: "Let's connect to beautiful world. Connect beautiful relationship with world",
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../../assests/butterfly2.png')} style={{height:320,width:280}}/>,
        subtitle: "Let's connect to beautiful world. Connect beautiful relationship with world",
        title:<Text style={{fontSize:36, fontWeight:'300', fontFamily:'EBGaramond-SemiBold', color:'#000', opacity:0.8}}>World of beauty</Text>,
    },
    {
        backgroundColor:  '#fff',
        image: <Image source={require('../../assests/butterfly3.png')} style={{height:300,width:300}}/>,
        title:<Text style={{fontSize:36, fontWeight:'300',fontFamily:'EBGaramond-SemiBold', color:'#000', opacity:0.8}}>Connecting to nature</Text>,
        subtitle: "Let's connect to beautiful world. Connect beautiful relationship with world",
    }
]

const OnBoardScreen = (props) => {

    const done = () => {
        props.navigation.navigate("Home");
    }
    
    

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
            <Onboarding 
                bottomBarColor='#fff'
                bottomBarHighlight={true}
                bottomBarHeight={80}
                allowFontScalingText={true}
                pages={DATA} 
                showNext={true} 
                showSkip={true} 
                onSkip={done} 
                onDone={done}/>
        </View>
    )
}
export default OnBoardScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
