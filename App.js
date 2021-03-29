import React, {useState} from 'react';
import {Text ,View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

const {width,height} =Dimensions.get('window');

function App () {

  const [Number, setNumber] = useState(0);

  onChange = (Number) => {
    setNumber({Number:Number})
  }

  return (
    <View style={{flex:1,backgroundColor:'#00'}}> 
      <View style={{height:'43%', justifyContent:'flex-end', alignItems:'flex-end'}}><Text style={{fontSize:70, color:'white'}}>{Number}</Text></View>    
      
      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity><View style={styles.border}><Text style={{fontSize:40, color:'#b32400'}}>C</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.cl}>( )</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.cl}>%</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.cl}>/</Text></View></TouchableOpacity>
      </View>   

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => onChange('7')}><View style={styles.border}><Text style={styles.text}>7</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>8</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>9</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.cl}>X</Text></View></TouchableOpacity>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>4</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>5</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>6</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.cl}>-</Text></View></TouchableOpacity>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>1</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>2</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>3</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.cl}>+</Text></View></TouchableOpacity>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>+/-</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>0</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.border}><Text style={styles.text}>,</Text></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.equal}><Text style={styles.text}>=</Text></View></TouchableOpacity>
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
