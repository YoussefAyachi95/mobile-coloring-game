import { G, Path, Ellipse, Rect, Circle, Polygon } from 'react-native-svg'

type ImageProps = {
    onFill: (i: number) => void;
    fillColors: string[];
}

const DummySvg = ({ onFill, fillColors }: ImageProps) => {
    return (
        <G>
            <Circle
                onPress={() => onFill(0)}
                fill={fillColors[0]}
                cx="250"
                cy="60"
                r="50"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <Rect
                onPress={() => onFill(1)}
                fill={fillColors[1]}
                x="100"
                y="150"
                width="150"
                height="100"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <Polygon
                onPress={() => onFill(2)}
                fill={fillColors[2]}
                points="175,90 90,150 260,150"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />

            <Rect
                onPress={() => onFill(3)}
                fill={fillColors[3]}
                x="140"
                y="190"
                width="50"
                height="60"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />

            <Rect
                onPress={() => onFill(4)}
                fill={fillColors[4]}
                x="300"
                y="180"
                width="30"
                height="70"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <Ellipse
                onPress={() => onFill(5)}
                fill={fillColors[5]}
                cx="315"
                cy="130"
                rx="50"
                ry="50"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
        </G>
    )
}

export default DummySvg