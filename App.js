import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity} from 'react-native';


const TButton=(props)=> {
  const [val,setVal]=useState("");
  const onpress=()=>{ 
    if(val=="")
    {
      setVal(props.current);
      props.b(props.row,props.col,props.current);
      props.onChange();
      
    }
  };
  return(
    <View>
        <TouchableOpacity style={styles.bstyle}
        onPress={onpress}
        activeOpacity={0}
        >
          <Text>{val}</Text>
        </TouchableOpacity>
    </View>
    );
  
};

const Ground = ()=>{
    // starting state
    const [curr,setCurr]=useState("X");

    //board to change the state and compare if win
    const [board,setboard]=useState([["","",""],["","",""],["","",""]]);
    const onchange=()=>{
      if(curr=="X")
        setCurr("O");
      else if(curr=="O")
        setCurr("X");
      alert(board);
    };

    //change board function since it cannot be changed if passed to other component
    const changeboard = (r,c,val)=>{
      var a = board;
      a[r][c]=val;
      setboard(a);
      checkwin();
    }


    //check win everytime the function is called
    const checkwin=()=>{
      if(board[0][0]=="X" && board[1][1]=="X" && board[2][2]=="X")
      {
        alert("X won");
      }
    }
    return(
      <View>
        {/* creating the borad for setting each 3 button in one row*/}
        <View style={{flexDirection:'row'}}>
          {/* row and col number will help in detecting which button is clicked
          current value will be set on the button X or O
          onchange  function will change the current vlaue ongoing on the board after changing the value on buton
          change board change the value in array that will be use to detect win 
          */}
          <TButton row={0} col={0} current={curr} onChange={onchange} b={changeboard}></TButton>
          <TButton row={0} col={1} current={curr} onChange={onchange} b={changeboard}></TButton>
          <TButton row={0} col={2} current={curr} onChange={onchange} b={changeboard}></TButton>
        </View>
        <View style={{flexDirection:'row'}}>
        <TButton row={1} col={0} current={curr} onChange={onchange} b={changeboard}></TButton>
        <TButton row={1} col={1} current={curr} onChange={onchange} b={changeboard}></TButton>
        <TButton row={1} col={2} current={curr} onChange={onchange} b={changeboard}></TButton>
        </View>
        <View style={{flexDirection:'row'}}>
        <TButton row={2} col={0} current={curr} onChange={onchange} b={changeboard}></TButton>
        <TButton row={2} col={1} current={curr} onChange={onchange} b={changeboard}></TButton>
        <TButton row={2} col={2} current={curr} onChange={onchange} b={changeboard}></TButton>
        </View>
      </View>
    )
  
}

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Ground />
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bstyle: {
    width:60,
    height:60,
    backgroundColor:"red",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    },
});
