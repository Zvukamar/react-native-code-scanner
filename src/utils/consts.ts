import { Dimensions } from 'react-native';
import { BarcodeType } from '@mgcrea/vision-camera-barcode-scanner';

export const HORIZONTAL_PERCENTAGE_MARGIN = 0.07;
export const VERTICAL_PERCENTAGE_MARGIN = 0.45;
export const DEFAULT_BARCODE_TYPES = ['code-128'] as BarcodeType[];
export const SCREEN_HEIGHT = Dimensions.get('window').height;