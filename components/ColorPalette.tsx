import { View, StyleSheet, TouchableOpacity } from 'react-native'

interface ColorPaletteProps {
    currentColor: string;
    changeColor: (color: string) => void;
}

const ColorPalette = ({ currentColor, changeColor}: ColorPaletteProps) => {
    const colors = [
        'gray',
        'cyan',
        'magenta',
        'lime',
        'maroon',
        'navy',
        'olive',
        'teal',
        'silver',
        'gold',
        'beige',
        'ivory',
        'turquoise',
        'lavender',
    ]

    return (
        <View style={styles.container}>
            {
                colors.map((color) => {
                    const activeClass = currentColor === color
                    return (
                        <TouchableOpacity
                            key={color}
                            onPress={() => {
                                changeColor(color)
                            }}
                        >
                            <View style={[
                                styles.item,
                                { backgroundColor: color },
                                activeClass ? styles.active : null,
                            ]}>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 100,
        flexWrap: 'wrap',
        gap: 8,
        justifyContent: 'center'
    },
    item: {
        width: 70,
        height: 50,
    },
    active: {
        borderWidth: 4,
        borderColor: 'black',
    }
})


export default ColorPalette