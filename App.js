import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StatusBar, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { Device } from 'react-native-ble-manager';

BleManager.start({ showAlert: false });
export default function App() {




  // list 
  const [op1, setOp1] = useState(false);
  const [val1, setVal1] = useState(null);
  const [items1, setItems1] = useState([
    {label: '10นาที', value: '10นาที'},
    {label: '30นาที', value: '30นาที'}
  ]);

  const [op2, setOp2] = useState(false);
  const [val2, setVal2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'กระพิบ', value: 'กระพิบ'},
    {label: 'สไลด์', value: 'สไลด์'}
  ]);
  
  const handleButtonPress = () => {
    // Handle button press action here
    // You can add your custom functionality here
    // For example, display an alert:
    alert('Button Clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Warning Sign</Text>

      <View style={styles.input}>
        <TextInput style={styles.inputwords} placeholder='Enter something...' />
      </View>

      <View style={styles.option}>
        <View style={styles.option1}>
        <DropDownPicker
      open={op1}
      value={val1}
      items={items1}
      setOpen={setOp1}
      setValue={setVal1}
      setItems={setItems1}
    />
        </View>
        <View style={styles.option2}>
        <DropDownPicker
      open={op2}
      value={val2}
      items={items2}
      setOpen={setOp2}
      setValue={setVal2}
      setItems={setItems2}
    />
        </View>
      </View>

      <TouchableOpacity onPress={handleButtonPress} style={styles.btn}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.Status}>
      <Text style={styles.btnstatus}>Connected</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFE3F3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  logo: {
    fontSize: 36,
    fontWeight: '900',
    fontFamily: 'Inter',
    fontStyle: 'italic',
    marginTop: 20,
    color: '#296A9F',
  },
  input: {
    margin: 50,
    width: 360,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputwords: {
    fontSize: 25,
    fontFamily: 'Poppins',
  },
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 360,
    height: 150,
    
  },
  option1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 84,
    width: 160,
    height: 50,
    backgroundColor: '#fff',
  },
  option2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 84,
    width: 160,
    height: 50,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#8A7FC7',
    width: 300,
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 300,
    
  },
  btnText: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  Status: {
    width: 175,
    height: 45,
    backgroundColor: '#fff',
    marginTop: -20,
    borderRadius: 69,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnstatus:  {
    color: 'green',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 15,

  }
});
