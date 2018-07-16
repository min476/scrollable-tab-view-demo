import {
    Dimensions,
    PixelRatio,
} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale(); 

let pixelRatio = PixelRatio.get();
const defaultPixel = 2;            
//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);


export function setSpText(size) {
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size / defaultPixel;
}

export function scaleSize(size) {

    size = Math.round(size * scale);
    return size / defaultPixel;
}
