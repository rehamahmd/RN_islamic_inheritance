import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class Dimension {

    static convertH(pixels:number) {
        let height = 812 - 44;
        return hp((pixels / height) * 100);
    }

    static convertW(pixels:number) {
        let width = 375;
        return wp((pixels / width) * 100);
    }


   
}   
