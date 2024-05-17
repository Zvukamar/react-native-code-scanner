import { iOSCorners } from '@mgcrea/vision-camera-barcode-scanner';
import { HORIZONTAL_PERCENTAGE_MARGIN, VERTICAL_PERCENTAGE_MARGIN } from './consts';

export const iOSresultInCenter = (corners: iOSCorners) => {
    const { bottomLeft, bottomRight, topLeft } = corners;
    if (bottomLeft.x >= HORIZONTAL_PERCENTAGE_MARGIN && bottomRight.x <= 1 - HORIZONTAL_PERCENTAGE_MARGIN) {
        return bottomLeft.y >= VERTICAL_PERCENTAGE_MARGIN && topLeft.y <= 1 - VERTICAL_PERCENTAGE_MARGIN;
    }
};