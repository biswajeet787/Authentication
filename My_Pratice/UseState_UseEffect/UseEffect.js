import { View, Text, Button } from 'react-native'
import {useState,useEffect} from 'react'

const UseEffect = () => {
    const [color, setColor] = useState('red');

    useEffect(() => {
      console.log(`The color has change to ${color}`);
    })
    

    function colorChange(){
        if(color==='red'){
            setColor('blue');
        }
        else if(color==='blue'){
            setColor('green');
        }else if(color==='green'){
            setColor('pink');
        } else if(color==='pink'){
            setColor('red');
        }
    }
  return (
    <View style={{flex:1,justifyContent:'center',backgroundColor:color,}}>
      <Text style={{fontSize:20,textAlign:'center'}}>{color}</Text>
      <Button title='update the color' color='green' onPress={colorChange}/>
    </View>
  )
}

export default UseEffect