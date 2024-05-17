import { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { AndroidBarcode, BarcodeType, iOSBarcode, useBarcodeScanner } from '@mgcrea/vision-camera-barcode-scanner';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { Worklets } from 'react-native-worklets-core';
import { Overlay } from './components/Overlay';
import { DEFAULT_BARCODE_TYPES } from './utils/consts';
import { iOSresultInCenter } from './utils/helpers';

interface BarcodeScannerProps {
    onScan: (barcode: string) => void;
    barcodeTypes?: BarcodeType[];
    showOverlay?: boolean;
}

const BarcodeScanner = ({ onScan, showOverlay, barcodeTypes = DEFAULT_BARCODE_TYPES }: BarcodeScannerProps) => {
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();

    const updateResult = Worklets.createRunOnJS((code: string) => {
        onScan(code);
    });

    const { props: cameraProps } = useBarcodeScanner({
        fps: 10,
        barcodeTypes,
        onBarcodeScanned: (barcodes) => {
            'worklet';
            const [barcode] = barcodes;
            if (Platform.OS === 'ios') {
                const { corners } = barcode.native as iOSBarcode;
                if (iOSresultInCenter(corners)) {
                    barcode?.value && updateResult(barcode.value);
                }
            } else {
                // Android
                const { cornerPoints } = barcode.native as AndroidBarcode;

            }
        },
    });

    useEffect(() => {
        requestPermission();
    }, []);

    if (!hasPermission) return null;
    if (device == null) {
        throw Error('Availble device with camera was not found');
    }

    return (
        <View style={StyleSheet.absoluteFill}>
            {hasPermission && (
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    {...cameraProps}
                />
            )}
            {showOverlay && <Overlay />}
        </View>
    )
}

export default BarcodeScanner;