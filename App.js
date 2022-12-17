
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const operatorsCheckList = ['+', '-', '/', '*']


export default function App() {

  const [calculations, setCalculations] = useState("")
  const [result, setResult] = useState("")
  
  const calculate = () => {
    
    
    if(integrityCheck(calculations)){
      setResult(eval(calculations))
    }
    else{

      setResult("0")
    }
  }


  const integrityCheck = (calc) => {

    for(let i = 0; i < operatorsCheckList.length; i++){
      for(let j = 0; j < calc.length;j++){

        if(calc[j] == operatorsCheckList[i]){

          for(let k = 0; k < operatorsCheckList.length; k++){

            if(calc[j+1] == operatorsCheckList[k] || j+1 == calc.length){
              setResult("Invalid calculation")
              return false
            }
              
          }
        }
        if(calc[j] == '/' && calc[j+1] == '0'){
          setResult("Attempt to divide by zero")
          return false
        }
          
          
      }
    }

    return true
  }

  


  return (
    <View style={styles.container}>



      <View style={styles.inputText}>
        <Text style={[styles.btnText, {fontSize: 40, color: 'black'}]}>
          {calculations}
        </Text>

        <View style={styles.resultText}>
          <Text style={[styles.btnText, {fontSize: 30, color: 'black'}]}>
            {result}
          </Text>
          </View>
      </View>
      <View style={styles.buttons}>

      {/* 9 - 5  */}
      <View style={[styles.buttonRow, {backgroundColor: 'white'}]}>



      <TouchableOpacity 
        onPress={() => setCalculations(calculations + '9')}
        style={[styles.btn, {marginLeft: 10}]}>
        <Text style={styles.btnText}>9</Text>

      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => setCalculations(calculations + '8')} 
      style={styles.btn}>
      <Text style={styles.btnText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '7')}
      style={styles.btn}>
      <Text style={styles.btnText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '6')}
      style={[styles.btn, {marginRight: 10}]} >
      <Text style={styles.btnText}>6</Text>
      </TouchableOpacity>
      </View>

      {/* 5 - 1  */}
      <View style={[styles.buttonRow, {backgroundColor: 'white'}]}>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '5')}
      style={[styles.btn, {marginLeft: 10}]} >
      <Text style={styles.btnText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '4')}
      style={styles.btn} >
      <Text style={styles.btnText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '3')}
      style={styles.btn} >
      <Text style={styles.btnText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '2')}
      style={[styles.btn, {marginRight: 10}]} >
      <Text style={styles.btnText}>2</Text>
      </TouchableOpacity>
      </View>

      
      <View style={[styles.buttonRow, {backgroundColor: 'white'}]}>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '1')}
      style={[styles.btn, {marginLeft: 10}]}>
      <Text style={styles.btnText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '0')}
      style={styles.btn} >
      <Text style={styles.btnText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '+')}
      style={styles.btn} >
      <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '-')}
      style={[styles.btn, {marginRight: 10}]} >
      <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      </View>

      <View style={[styles.buttonRow, {backgroundColor: 'white'}]}>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '*')}
      style={[styles.btn, {marginLeft: 10}]}>
      <Text style={styles.btnText}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => setCalculations(calculations + '/')}
      style={styles.btn} >
      <Text style={styles.btnText}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => calculate()}
      style={styles.btn} >
      <Text style={styles.btnText}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => {setCalculations(""); setResult("")}}
      style={[styles.btn, {marginRight: 10}]} >
      <Text style={styles.btnText}>C</Text>
      </TouchableOpacity>
      
      
      </View>

      



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    
    
  },
  inputText: {
    marginTop: 25,
    width: "100%",
    height: '20%',
    backgroundColor: 'white',
    opacity: 0.5,
    justifyContent: 'flex-end',
    
  },
  resultText: {
    width: '100%',
    height: '35%',
    backgroundColor: 'gray',
    opacity: 1
  },
  buttons: {
    width: '100%',
    height: '80%',
    
  },
  buttonRow: {
    width: '100%',
    height: '20%',
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    width: '20%',
    height: '60%',
    borderRadius: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  }

});
