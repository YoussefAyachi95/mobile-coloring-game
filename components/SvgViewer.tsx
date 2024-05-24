import { View, Text, Dimensions } from 'react-native' 
import DummySvg from './DummySvg';
import { Svg } from 'react-native-svg';

type SvgViewerProps = {
    onFill: (i: number) => void;
    fillColors: string[];
}

const SvgViewer = ({ onFill, fillColors}: SvgViewerProps) => {
  return (
    <View style={{ flex: 1 }}>
        <Svg width={Dimensions.get('screen').width} height={Dimensions.get('screen').height}>
            <DummySvg onFill={onFill} fillColors={fillColors} />
        </Svg>
    </View>
  )
}

export default SvgViewer