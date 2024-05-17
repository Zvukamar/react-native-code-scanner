import { StyleSheet, View } from 'react-native';
import { HORIZONTAL_PERCENTAGE_MARGIN, SCREEN_HEIGHT, VERTICAL_PERCENTAGE_MARGIN } from '../utils/consts';

export const Overlay = () => {
    return (
        <>
            <View style={styles.vericalViewStyle} />
            <View style={styles.middleViewStyle}>
                <View style={styles.middleHorizontalViewStyle} />
                <View style={styles.cameraBorderStyle} />
                <View style={styles.middleHorizontalViewStyle} />
            </View>
            <View style={styles.vericalViewStyle} />
        </>
    )
}

const styles = StyleSheet.create({
    vericalViewStyle: {
        backgroundColor: 'black',
        opacity: 0.7,
        height: SCREEN_HEIGHT * VERTICAL_PERCENTAGE_MARGIN
    },
    middleViewStyle: {
        flexDirection: 'row',
        height: SCREEN_HEIGHT * (1 - (2 * VERTICAL_PERCENTAGE_MARGIN)),
    },
    middleHorizontalViewStyle: {
        width: SCREEN_HEIGHT * HORIZONTAL_PERCENTAGE_MARGIN,
        backgroundColor: 'black',
        opacity: 0.7
    },
    cameraBorderStyle: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 4,
    }
});