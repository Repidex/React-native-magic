import React from 'react';
import Video from 'react-native-video';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="#fff"
        hidden={false}
        backgroundColor="#000"
        transparent={true}
      />
      <Video
        source={require('../../assests/welcomeBackground.mp4')}
        style={styles.backgroundVideo}
        volume={1.0}
        muted={false}
        resizeMode={'cover'}
        rate={1.0}
        repeat
        ignoreSilentSwitch={'obey'}
      />

      <View style={styles.content}>
        <Text style={styles.text}>WELCOME</Text>
        <TouchableOpacity onPress={() => console.log('Login')}>
          <Text style={styles.loginStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Sign Up')}>
          <Text style={styles.signUpStyle}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight:'bold',
    margin: 10,
    color: '#fff',
  },
  loginStyle: {
    left: 80,
    top: 170,
    height: 50,
    width: 200,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:20
  },
  signUpStyle: {
    left: 80,
    top: 180,
    height: 50,
    width: 200,
    // backgroundColor:'#fff',
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
