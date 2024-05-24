import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import SvgViewer from './components/SvgViewer';
import { useEffect, useState } from 'react';
import ColorPalette from './components/ColorPalette';

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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor} />
      <SvgViewer fillColors={fillColors} onFill={onFill} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 150,
  },
});
