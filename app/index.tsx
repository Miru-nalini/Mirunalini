import { Text, View, StyleSheet, Image,Pressable, TouchableHighlight, TouchableOpacity, ScrollView,  } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Quantico_700Bold, Quantico_400Regular, Quantico_400Regular_Italic, Quantico_700Bold_Italic} from "@expo-google-fonts/quantico";
import { useEffect } from "react";
import { router, Link } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

SplashScreen.preventAutoHideAsync();

export default function Index() {



  const [loaded,error] = useFonts({
    regular: Quantico_400Regular,
    italic: Quantico_400Regular_Italic,
    bold: Quantico_700Bold,
    boldItalic : Quantico_700Bold_Italic
    });

    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    },[loaded,error]);

    if(!loaded && !error){
      return null;
    }


    const downloadResume = async() => {

    }

  return (
    <ScrollView contentContainerStyle={{
      justifyContent: "center",alignItems:'center',width:'100%', height:'100%'}} scrollEnabled>
    <View style={styles.container}>
      <View style={[styles.tile,{width:'65%',backgroundColor:'#9999ff'}]}>
        <View>
          <Text style={styles.headingText}>Hey! Welcome :) <br/>I'm Mirunalini, a software engineer.</Text>
          <Text style={styles.subText}>I enjoy developing user-centric, high-performance applications for both web and mobile. Check out my projects to learn more about my work.<br/>Connect with me & let's work together!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
           onPress={
            ()=>router.replace('/')
          }
          >
            <View style={styles.button}>
              <Text style={{fontFamily:'regular',fontSize:20,color:'white',}}>Contact Me</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={'https://leetcode.com/Miru-nalini/'} >
            <Text style={styles.text}>LeetCode</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={'https://www.hackerrank.com/Miru_nalini'} >
              <Text style={styles.text}>Hackerrank</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={'https://github.com/Miru-nalini'} >
              <Text style={styles.text}>Github</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={'https://www.linkedin.com/in/miru-nalini/'}>
              <Text style={styles.text}>LinkedIn</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={
            ()=>router.push('/works')
          }
          >
            <View style={styles.button}>
              <Text style={{fontFamily:'regular',fontSize:20,color:'white',}}>Projects</Text>
              <AntDesign name="right" size={24} color="white" />
            </View>
          </TouchableOpacity>


        </View>
      </View>
      <View style={[styles.tile,{width:'35%',height:'80%',alignItems:'center',padding:40, marginTop:40}]}>
      <Image
          source={require('../assets/images/avatar.png')}
          style={{height:'100%',width:'100%', resizeMode:'cover'}}
      />
      </View>

      </View>
    </ScrollView>
  );
}


export const styles = StyleSheet.create({
 container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor:'white',
  flexDirection:'row',
  paddingHorizontal:60,
  paddingTop:20,
  gap:30
},
tile:{
  height:'80%',
  borderRadius:50,
  alignItems:'flex-start',
  justifyContent:'space-between',
  shadowColor: "#000",
  shadowOffset: {
    width: 1,
    height: 3,
  },
  shadowOpacity: 0.25,
  shadowRadius: 15,
  elevation: 8,
  marginTop:40
},
headingText:{
  fontFamily:'boldItalic',
  fontSize:48,
  color:'black',
  padding:40,
  paddingHorizontal:50
},
subText:{
  fontFamily:'regular',
  fontSize:24,
  color:'#0c0c0c',
  paddingHorizontal:50
},
buttonContainer:{
  flexDirection:'row',
  gap:40,
  padding:50,
  alignSelf:'center',
  alignItems:'center'
},
text:{
  fontFamily:'regular',
  fontSize:20,
  color:'black',
  textShadowColor:'gray',
  textShadowOffset:{
    width:2,
    height:2
  },
  shadowOpacity:0.8
},
button:{
  paddingHorizontal:20,
  paddingVertical:16,
  backgroundColor:'black',
  borderRadius:25,
  flexDirection:'row',
  alignItems:'center',
  gap:4
}
})