import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SvgViewer from './components/SvgViewer';
import { useEffect, useState } from 'react';

export default function App() {
  const [fillColors, setFillColors] = useState<string[]>([])
  const [currentColor, setCurrentColor] = useState<string>('red')

  useEffect(() => {
    setFillColors(Array(5).fill('white'))
  }, [])

  const onFill = (i: number) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SvgViewer fillColors={fillColors} onFill={onFill} />
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
});
