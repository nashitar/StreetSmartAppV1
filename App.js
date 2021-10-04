import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import Task from './components/task';
import task from './components/task';

export default function App() {
  return (
    <ImageBackground style={styles.container} 
    source={require('C:/Users/Steve Pasch/OneDrive/Desktop/SXS/todoList/starrysky.jpeg')}>
      
      
        

        <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>STREET {'\n'} SMART</Text>
          <View style={styles.hero}>
            <Image source = {require('C:/Users/Steve Pasch/OneDrive/Desktop/SXS/todoList/Blue_Superhero.png')} 
            style = {{ width: 300, height: 300 }}/>
          </View>
          
          <View style = {styles.items}>
            {/*This is where the tasks will go */}
            <Task text={'Login'}/>
            <Task text={'Sign Up'}/>

          </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  hero: {
    alignSelf:'center'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize:60,
    fontWeight: 'bold',
    color: '#4CB5F1',
    fontStyle: 'italic',
    fontFamily: 'Montserrat-Black.ttf',
    
  },
  items: {
    marginTop: 10,
  },
  
});
