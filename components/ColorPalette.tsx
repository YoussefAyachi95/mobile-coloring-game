import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

interface ColorPaletteProps {
    currentColor: string
    changeColor: (color: string) => void
}

const ColorPalette = ({ currentColor, changeColor }: ColorPaletteProps) => {
    const colors = [
        'gray',
        'cyan',
        'magenta',
        'lime',
        'navy',
        'gold',
    ]

    return (
        <View style={styles.container}>
            {colors.map((color) => {
                const isActive = currentColor === color
                return (
                    <TouchableOpacity
                        key={color}
                        onPress={() => changeColor(color)}
                        style={[
                            styles.item,
                            { backgroundColor: color },
                            isActive && styles.active,
                        ]}
                    >
                        {isActive && (
                            <AntDesign name='checkcircle' size={24} color='black' style={styles.checkIcon} />
                        )}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 100,
        gap: 16,
    },
    item: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        margin: 4,
    },
    active: {
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 25,
    },
    checkIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
        color: 'white',
        fontSize: 24,
    },
})

export default ColorPalette