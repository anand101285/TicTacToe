import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity} from 'react-native';


const TButton=(props)=> {
  const [val,setVal]=useState("");
  const onpress=()=>{ 
    if(val=="")
    {
      setVal(props.current);
      props.b(0,0,props.current);
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
      var a= board;
      a[r][c]=val;
      setboard(a);
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
        <View style={{flexDirection:'row'}}>
          <TButton current={curr} onChange={onchange} b={changeboard}></TButton>
          <TButton current={curr} onChange={onchange}></TButton>
          <TButton current={curr} onChange={onchange}></TButton>
        </View>
        <View style={{flexDirection:'row'}}>
        <TButton current={curr} onChange={onchange} b={changeboard}></TButton>
        <TButton current={curr} onChange={onchange} b={changeboard}></TButton>
        <TButton current={curr} onChange={onchange}></TButton>
        </View>
        <View style={{flexDirection:'row'}}>
        <TButton current={curr} onChange={onchange}></TButton>
        <TButton current={curr} onChange={onchange}></TButton>
        <TButton current={curr} onChange={onchange} b={changeboard}></TButton>
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
