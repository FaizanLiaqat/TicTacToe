import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const size = Dimensions.get('window').width / 3;

export default function App() {
  const [playerTurn, setPlayerTurn] = useState('O');
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [win, setWin] = useState<boolean>(false);

  const checkLine = (
    currentBoard: string[],
    start: number,
    step: number,
    maxStep: number,
  ): boolean => {
    let track = currentBoard[start];
    let count = 0;
    let i = 0;

    for (; i < maxStep; ) {
      if (currentBoard[start] == '') {
        return false;
      }
      start += step;
      if (track == currentBoard[start]) {
        count++;
      }
      if (count == 2) {
        return true;
      }
      i++;
    }

    return false;
  };

  const checkWining = (newBoard: string[]): boolean => {
    // Col 3
    // check each row three consective same player icon
    // let count = 0;
    // let track = '';
    // let startWindow = 0;
    // for (let i = 0; i < newBoard.length; ) {
    //   if (i % 3 == 0) {
    //     count = 0;
    //     track = newBoard[i];
    //     i++;
    //     console.log('track:', { track });
    //   } else if (newBoard[i] == track) {
    //     console.log('match: ', newBoard[i]);
    //     i++;
    //     count++;
    //   } else {
    //     count = 0;
    //     startWindow += 3;
    //     i = startWindow;
    //   }
    //   if (count == 2 && (track == 'X' || track == 'O')) {
    //     console.log('horizontal win');
    //     return true;
    //   }
    // }

    // //check vertical
    // count = 0;
    // track = '';
    // startWindow = 0;
    // for (let i = 0; i < newBoard.length; ) {
    //   if (i == 0) {
    //     track = newBoard[i];
    //     console.log('V-track[0]: ', { track });
    //     i += 3;
    //   } else if (newBoard[i] == track) {
    //     console.log('V-match: ', newBoard[i]);
    //     i += 3;
    //     count++;
    //   } else {
    //     count = 0;
    //     startWindow += 1;

    //     i = startWindow;

    //     track = newBoard[i];
    //     console.log(`V-track[${i}]: `, { track });
    //     i += 3;
    //   }

    //   if (count == 2 && (track == 'X' || track == 'O')) {
    //     console.log('vertical win');
    //     return true;
    //   }
    // }
    if (
      checkLine(newBoard, 0, 1, 3) || // Row 1
      checkLine(newBoard, 3, 1, 3) || // Row 2
      checkLine(newBoard, 6, 1, 3) || // Row 3
      checkLine(newBoard, 0, 3, 3) || // Col 1
      checkLine(newBoard, 1, 3, 3) || // Col 2
      checkLine(newBoard, 2, 3, 3)
    ) {
      return true;
    }
    if (
      (newBoard[0] == newBoard[4] &&
        newBoard[4] == newBoard[8] &&
        (newBoard[0] == 'X' || newBoard[0] == 'O')) ||
      (newBoard[2] == newBoard[4] &&
        newBoard[4] == newBoard[6] &&
        (newBoard[2] == 'X' || newBoard[2] == 'O'))
    ) {
      //check diagnol
      console.log('diagnol win');
      return true;
    }

    return false;
  };

  const turnPlayed = (index: number) => {
    // const newArray = board.map((c,i)=>{
    //   if(i==index && c==''){
    //     return playerTurn
    //   }else{
    //     return c
    //   }
    // })
    if (board[index] != '') return;

    const newArray = [...board];
    newArray[index] = playerTurn;
    setBoard(newArray);

    // if (playerTurn === 'O') {
    //   setPlayerTurn('X');
    // } else {
    //   setPlayerTurn('O');
    // }
    if (checkWining(newArray)) {
      setWin(true);
    } else {
      setPlayerTurn(playerTurn == 'O' ? 'X' : 'O');
    }
  };

  const restart = () => {
    setPlayerTurn('O');
    let tempArray = [...board];
    for (let i = 0; i < board.length; i++) {
      tempArray[i] = '';
    }
    setBoard(tempArray);
    setWin(false);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {win && (
          <View>
            <Text>"{playerTurn} Won this game"</Text>
          </View>
        )}
        <View>
          <Text>Player Turn</Text>
        </View>
        <View style={styles.itemsContainer}>
          {board.map((c, i) => {
            return (
              <Pressable key={i} onPress={() => turnPlayed(i)}>
                <View style={styles.cell}>
                  <Text>{c}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* <FlatList
          data={board}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => turnPlayed(index)}>
              <View>
                <Text>{item}</Text>
              </View>
            </Pressable>
          )}
        /> */}
        <Pressable onPress={restart}>
          <View style={styles.restartBtn}>
            <Text>Restart The Game</Text>
          </View>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: size,
    height: size,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restartBtn: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 40,
    height: 100,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
