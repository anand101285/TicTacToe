import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity} from 'react-native';


const TButton=(props)=> {
  const [val,setVal]=useState("");

  //if initial val is "" then new val will be set
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
    const [curr,setCurr]=useState("O");
    

    //board to change the state and compare if win
    const [board,setboard]=useState([["","",""],["","",""],["","",""]]);
    const onchange=()=>{
      if(curr=="X")
        setCurr("O");
      else if(curr=="O")
        setCurr("X");
    };

    //change board function since it cannot be changed if passed to other component
    const changeboard = (r,c,val)=>{
      var a = board;
      a[r][c]=val;
      setboard(a);
      checkwin('X');
      checkwin('O');
    }


    //check win everytime the function is called
    const checkwin=(turn)=>{
      if(board[0][0]==turn && board[1][1]==turn && board[2][2]==turn)
      {
        alert(`${turn} Won`);
      }
      else if(board[0][0]==turn && board[0][1]==turn && board[0][2]==turn)
      {
        alert(`${turn} Won`);
      }
      else if(board[1][0]==turn && board[1][1]==turn && board[1][2]==turn)
      {
        alert(`${turn} Won`);
      }
      else if(board[2][0]==turn && board[2][1]==turn && board[2][2]==turn)
      {
        alert(`${turn} Won`);
      }
      else if(board[0][0]==turn && board[1][0]==turn && board[2][0]==turn)
      {
        alert(`${turn} Won`);
      }
      else if(board[0][1]==turn && board[1][1]==turn && board[2][1]==turn)
      {
        alert(`${turn} Won`);
      }
      else if(board[0][2]==turn && board[1][2]==turn && board[2][2]==turn)
      {
        alert(`${turn} Won`);
      }
      else if(board[0][2]==turn && board[2][2]==turn && board[2][0]==turn)
      {
        alert(`${turn} Won`);
      }
      else
      {
        for (var i=0;i<board.length;i++)
        {
          for(var j=0;j<board[i].length;j++)
          {
            if(board[i][j]=="")
            {
              return;
            }
            else if(i==board.length-1 && j==board[i].length-1)
            {
              alert(`Match Is draw`);      
              board.map((val)=>val="");
            }
          }
        }
        
        
      }
    }
    return(
      <View>
        <Text style={{fontSize:30,marginBottom:90}} >Current Turn : {curr}</Text>
        {/* creating the borad for setting each 3 button in one row*/}
        <View style={{flexDirection:'row'}}>
          {/* row and col number will help in detecting which button is clicked
          current value will be set on the button X or O
          onchange  function will change the current vlaue ongoing on the board after changing the value on buton
          change board change the value in array that will be use to detect win 
          */}
          <TButton row={0} col={0} current={curr} onChange={onchange} b={changeboard} />
          <TButton row={0} col={1} current={curr} onChange={onchange} b={changeboard} />
          <TButton row={0} col={2} current={curr} onChange={onchange} b={changeboard} />
        </View>
        <View style={{flexDirection:'row'}}>
        <TButton row={1} col={0} current={curr} onChange={onchange} b={changeboard} />
        <TButton row={1} col={1} current={curr} onChange={onchange} b={changeboard} />
        <TButton row={1} col={2} current={curr} onChange={onchange} b={changeboard} />
        </View>
        <View style={{flexDirection:'row'}}>
        <TButton row={2} col={0} current={curr} onChange={onchange} b={changeboard} />
        <TButton row={2} col={1} current={curr} onChange={onchange} b={changeboard} />
        <TButton row={2} col={2} current={curr} onChange={onchange} b={changeboard} />
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
