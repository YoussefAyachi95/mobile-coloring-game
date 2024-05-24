import { G, Path, Ellipse, Rect } from 'react-native-svg'

type ImageProps = {
    onFill: (i: number) => void;
    fillColors: string[];
}

const DummySvg = ({ onFill, fillColors }: ImageProps) => {
    return (
        <G>
            <Rect 
                onPress={() => onFill(0)}
                fill={fillColors[0]} 
                id='rect1'
                width='86.540039'
                height='84.257622'
                x='109.50952'
                y='29.054186'
                stroke='#000000'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
            />
            <Rect 
                onPress={() => onFill(1)}
                fill={fillColors[1]} 
                width='79.136147'
                height='77.709641'
                x='97.011467'
                y='194.20596'
                stroke='#000000'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
            />
            <Ellipse 
                onPress={() => onFill(4)}
                fill={fillColors[4]} 
                cx='44.507202'
                cy='120.683'
                rx='25.677233'
                ry='26.818445'
                stroke='#000000'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
            />
        </G>
    )
}

export default DummySvg