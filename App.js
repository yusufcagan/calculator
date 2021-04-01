import React, {useState, useRef,useEffect} from 'react'
import {Text ,View, StyleSheet, Dimensions, TouchableOpacity, Input, TextInput, Keyboard, Alert} from 'react-native'

const {width,height} =Dimensions.get('window');


function App () {

  const [Number, setNumber] = useState('');
  const [temp, settemp] = useState('');
  const [sum1, setsum1] = useState('');
  const [sum2, setsum2] = useState('');
  const [bool, setbool] = useState(false);
  const [bool2, setbool2] = useState(false);
 
  const onChange = (cNumber) => {

    if(cNumber == '+' || cNumber == '=' || cNumber == '-' ){
      
      if(bool2==true){
          switch (temp) {
          case '+':
            setNumber(sum1+parseInt(sum2))
            break;
          
          case '-':
            setNumber(sum1-parseInt(sum2))
            break;
      
          default:
            break;
         }
         if(cNumber=='='){
           setbool(false);
           setbool2(false);
           setsum1('');
           setsum2('');
           //setNumber(Number.toString());
           return Number;
         }
      }
      

      settemp(cNumber);
      setbool(true);
      setbool2(true);
    }

    if(bool==true){
      setsum1(parseInt(Number));
      setbool(false);
    }
    setNumber(Number+cNumber);
    if(bool2==true){
      setsum2(sum2+cNumber);
    }
    
  };
    //Alert.alert(Number);
    //console.log(typeof(temp));
    //console.log(temp);

  return (
    <View style={{flex:1,backgroundColor:'#000'}}>         
      <View style={{height:'43%', justifyContent:'flex-end', alignItems:'flex-end'}}><TextInput showSoftInputOnFocus={false} style={{fontSize:60, color:'white'}}>{Number}</TextInput></View>
      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => setNumber('')}><View style={styles.border}><Text style={{fontSize:40, color:'#b32400'}}>C</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('(')}><View style={styles.border}><Text style={styles.cl}>( )</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('%')}><View style={styles.border}><Text style={styles.cl}>%</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('/')}><View style={styles.border}><Text style={styles.cl}>/</Text></View></TouchableOpacity>
      </View>   

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => onChange('7')}><View style={styles.border}><Text style={styles.text}>7</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('8')}><View style={styles.border}><Text style={styles.text}>8</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('9')}><View style={styles.border}><Text style={styles.text}>9</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('x')}><View style={styles.border}><Text style={styles.cl}>X</Text></View></TouchableOpacity>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => onChange('4')}><View style={styles.border}><Text style={styles.text}>4</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('5')}><View style={styles.border}><Text style={styles.text}>5</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('6')}><View style={styles.border}><Text style={styles.text}>6</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('-')}><View style={styles.border}><Text style={styles.cl}>-</Text></View></TouchableOpacity>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => onChange('1')}><View style={styles.border}><Text style={styles.text}>1</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('2')}><View style={styles.border}><Text style={styles.text}>2</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('3')}><View style={styles.border}><Text style={styles.text}>3</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('+')}><View style={styles.border}><Text style={styles.cl}>+</Text></View></TouchableOpacity>
      </View> 

      <View style={{flexDirection:'row', width:width, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => setNumber(Number*-1)}><View style={styles.border}><Text style={styles.text}>+/-</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('0')}><View style={styles.border}><Text style={styles.text}>0</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange(',')}><View style={styles.border}><Text style={styles.text}>,</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => onChange('=')}><View style={styles.equal}><Text style={styles.text}>=</Text></View></TouchableOpacity>
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
