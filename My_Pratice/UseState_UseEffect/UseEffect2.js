import {View, Text, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const UseEffect2 = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  const [first, setFirst] = useState(0);

  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    if (count > prevCount) {
      setFirst(first + 1); // Increment `first` when `count` increases
    } else if (count < prevCount) {
      setFirst(first - 1); // Decrement `first` when `count` decreases
    }
    setPrevCount(count); // Update previous count
    colors()
  }, [count]);

  function colors() {
    

    if(count>20){
        setColor('pink')
    } else if(count % 2 !== 0){
      setColor('orange');
    }else{
        setColor('blue');
    }
  }

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 40}}>{count}</Text>
      <Text style={{fontSize: 40}}>first:{first}</Text>

      <Button title="Increment" onPress={Increment} />
      <View style={{marginTop: 10}}></View>
      <Button title="Decrement" onPress={Decrement} />
    </View>
  );
};

export default UseEffect2;
