import React from 'react';
import {Text ,View, StyleSheet, Dimensions} from 'react-native'

const {width,height} =Dimensions.get('window');

function App () {  
  return (
    <View style={{flex:1,backgroundColor:'#00'}}> 
      <View style={{height:'43%'}}></View>    
      
      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <View style={styles.border}><Text style={{fontSize:40, color:'#b32400'}}>C</Text></View>
        <View style={styles.border}><Text style={styles.cl}>( )</Text></View>
        <View style={styles.border}><Text style={styles.cl}>%</Text></View>
        <View style={styles.border}><Text style={styles.cl}>/</Text></View>
      </View>   

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <View style={styles.border}><Text style={styles.text}>7</Text></View>
        <View style={styles.border}><Text style={styles.text}>8</Text></View>
        <View style={styles.border}><Text style={styles.text}>9</Text></View>
        <View style={styles.border}><Text style={styles.cl}>X</Text></View>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <View style={styles.border}><Text style={styles.text}>4</Text></View>
        <View style={styles.border}><Text style={styles.text}>5</Text></View>
        <View style={styles.border}><Text style={styles.text}>6</Text></View>
        <View style={styles.border}><Text style={styles.cl}>-</Text></View>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <View style={styles.border}><Text style={styles.text}>1</Text></View>
        <View style={styles.border}><Text style={styles.text}>2</Text></View>
        <View style={styles.border}><Text style={styles.text}>3</Text></View>
        <View style={styles.border}><Text style={styles.cl}>+</Text></View>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <View style={styles.border}><Text style={styles.text}>+/-</Text></View>
        <View style={styles.border}><Text style={styles.text}>0</Text></View>
        <View style={styles.border}><Text style={styles.text}>,</Text></View>
        <View style={styles.equal}><Text style={styles.text}>=</Text></View>
      </View>    

    </View>
  );
};

const styles =StyleSheet.create({
   border:{
      width:(width/4)-20,
      height:(width/4)-20,
      backgroundColor:'grey',
      borderRadius:15,
      marginBottom:10,
      marginLeft:10,
      marginRight:10,
      alignItems:'center',
      justifyContent:'center',
   },

   equal:{
    width:(width/4)-20,
    height:(width/4)-20,
    backgroundColor:'green',
    borderRadius:15,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',
    
 },
   text:{
     fontSize:40,
     color:'white',
   },

   cl:{
    fontSize:40,
    color:'green',
   }
   
})
export default App;
