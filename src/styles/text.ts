import { StyleSheet } from 'react-native';
import { StyleColors } from './colors';
import { Dimension } from './dimensions';

let textMainStyles = StyleSheet.create({
  heading_6: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: Dimension.convertW(120),
    lineHeight: Dimension.convertH(160), // TODO
    color: StyleColors.Color0,
  },
  heading_5: {
    fontFamily: 'Bebas-Regular',
    fontSize: Dimension.convertW(70),
    lineHeight: Dimension.convertH(90), // TODO
    color: StyleColors.Color0,
  },
  heading_4: {
    fontFamily: 'Bebas-Regular',
    fontSize: Dimension.convertW(60),
    lineHeight: Dimension.convertH(72),
    color: StyleColors.Color0,
  },
  heading_3: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: Dimension.convertW(50),
    lineHeight: Dimension.convertH(65),
    color: StyleColors.Color0,
  },
  heading_2: {
    fontFamily: 'Bebas-Regular',
    fontSize: Dimension.convertW(40),
    // TODO-> Ask Heba why commented this line -> its the reason of route details unit styling bug
    lineHeight: Dimension.convertH(55),
    color: StyleColors.Color0,
  },
  heading_1: {
    fontFamily: 'Bebas-Regular',
    fontSize: Dimension.convertW(34),
    lineHeight: Dimension.convertH(41),
    color: StyleColors.Color0,
  },
  heading0: {
    fontFamily: 'Bebas-Regular',
    fontSize: Dimension.convertW(30),
    lineHeight: Dimension.convertH(40),
    color: StyleColors.Color0,
  },
  // heading1: {
  //   fontFamily: 'BebasNeue-Regular',
  //   fontSize: Dimension.convertW(25),
  //   lineHeight: Dimension.convertH(35),
  //   color: StyleColors.Color0,
  // },
  heading2: {
    fontFamily: 'Bebas-Regular',
    fontSize: Dimension.convertW(24),
    lineHeight: Dimension.convertH(30),
    color: StyleColors.Color0
  },
  heading4: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: Dimension.convertW(20),
    lineHeight: Dimension.convertH(28),
    color: StyleColors.Color0
  },
  heading5: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: Dimension.convertW(18),
    lineHeight: Dimension.convertH(25),
    letterSpacing: 0.72,
    color: StyleColors.Color0
  },

  heading6: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: Dimension.convertW(16),
    lineHeight: Dimension.convertH(20),
    letterSpacing: 0.21,
    color: StyleColors.Color0
  },

  heading7: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: Dimension.convertW(10),
    lineHeight: Dimension.convertH(12),
    color: StyleColors.Color0
  },
  paragraph1: {
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: Dimension.convertW(14),
    lineHeight: Dimension.convertH(20),
    color: StyleColors.Color0
  },
  paragraph2: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: Dimension.convertW(14),
    lineHeight: Dimension.convertH(20),
    color: StyleColors.Color0
  },
  paragraph3: {
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: Dimension.convertW(12),
    // lineHeight: Dimension.convertH(20),
    color: StyleColors.Color0
  },
  paragraph4: {
    fontFamily: 'AvenirLTStd-Book',
    fontSize: Dimension.convertW(10),
    lineHeight: Dimension.convertH(12),
    color: StyleColors.Color0
  },
});

export let TextStyles = {
  H_6_COLOR_6: [textMainStyles.heading_6, { color: StyleColors.Color6 }], // _ is like -6
  H_5_NEUE: [textMainStyles.heading_5, { fontFamily: 'BebasNeue-Regular' }], // _ is like -5
  H_5_Color2_2: [textMainStyles.heading_5, { color: StyleColors.Color2_2 }], // _ is like -5


  H_4_Color2_2: [textMainStyles.heading_4, { color: StyleColors.Color2_2 }], // _ is like -4
  H_3: [textMainStyles.heading_3], // _ is like -3
  H_2: [textMainStyles.heading_2], // _ is like -2
  H_2_Color4: [textMainStyles.heading_2, {color: StyleColors.Color4 }], // _ is like -2

  H_2_NEUE: [textMainStyles.heading_2, { fontFamily: 'BebasNeue-Regular' }],
  H_1_NEUE: [textMainStyles.heading_1, { fontFamily: 'BebasNeue-Regular' }],
  
  H_1_Color2_2: [textMainStyles.heading_1, {color: StyleColors.Color2_2 }], // _ is like -1

  H0: [textMainStyles.heading0],
  H0_NEUE: [textMainStyles.heading0, { fontFamily: 'BebasNeue-Regular' }],
  H0_ROMAN_COLOR_4: [textMainStyles.heading0, { fontFamily: 'AvenirLTStd-Roman', color: StyleColors.Color4 }],

  // H1: [textMainStyles.heading1],
  H2: [textMainStyles.heading2],

  H2_COLOR_0_1: [textMainStyles.heading2, { color: StyleColors.Color_0_1 }],
  H2_LIGHT: [textMainStyles.heading2, { fontFamily: 'avenirltstd-light' }],
  H2_M: [textMainStyles.heading2, { fontFamily: 'AvenirLTStd-Medium' }],


  H4: [textMainStyles.heading4],
  H4_BEBAS: [textMainStyles.heading4, { fontFamily: 'Bebas-Regular' }],
  H4_NEUE: [textMainStyles.heading4, { fontFamily: 'BebasNeue-Regular' }],
  H4_ROMAN: [textMainStyles.heading4, { fontFamily: 'AvenirLTStd-Roman' }],
  H4_Color2_0: [textMainStyles.heading4, { color: StyleColors.Color2_0 }],
  H4_BEBAS_Color_0_1: [textMainStyles.heading4, { color: StyleColors.Color_0_1, fontFamily: 'Bebas-Regular' }],
  H4_BEBAS_Color11_1: [textMainStyles.heading4, { color: StyleColors.Color11_1, fontFamily: 'Bebas-Regular' }],

  H4_Color_0_1: [textMainStyles.heading4, { color: StyleColors.Color_0_1 }],

  H5_COLOR_4: [textMainStyles.heading5, { color: StyleColors.Color4 }],
  H5_COLOR_13: [textMainStyles.heading5, { color: StyleColors.Color13 ,fontFamily: 'Roboto-Regular'}],

  H5_COLOR_7_2: [textMainStyles.heading5, { color: StyleColors.Color7_2 }],
  H5_Color9: [textMainStyles.heading5, { color: StyleColors.Color9 }],

  H5_ROMAN: [textMainStyles.heading5, { fontFamily: 'Roboto-Regular' }],
  H5_ROMAN_Color6: [textMainStyles.heading5, { fontFamily: 'AvenirLTStd-Roman', color: StyleColors.Color6 }],

  H5: [textMainStyles.heading5, { fontFamily: 'AvenirLTStd-Medium' }],
  H5_MEDIUM_COLOR_0_1: [textMainStyles.heading5, { color:StyleColors.Color_0_1, fontFamily: 'AvenirLTStd-Medium' }],
  H5_LIGHT: [textMainStyles.heading5, { fontFamily: 'avenirltstd-light' }],

  H5_LIGHT_COLOR_5_1: [textMainStyles.heading5, { color: StyleColors.Color5_1, fontFamily: 'avenirltstd-light' }],
  H5_COLOR_5_1: [textMainStyles.heading5, { color: StyleColors.Color5_1}],
  H5_BEBAS_COLOR_0_1: [textMainStyles.heading5, { color: StyleColors.Color_0_1, fontFamily: 'Bebas-Regular' }],
  H5_BEBAS_Color8_1: [textMainStyles.heading5, { color: StyleColors.Color8_1, fontFamily: 'Bebas-Regular' }],
  H5_Color_0_1: [textMainStyles.heading5, { color: StyleColors.Color_0_1 }],
  H5_BEBAS_Color2_2: [textMainStyles.heading5, {color: StyleColors.Color2_2, fontFamily: 'Bebas-Regular', }],

  H6: [textMainStyles.heading6],
  H6_LIGHT: [textMainStyles.heading6, { fontFamily: 'avenirltstd-light' }],
  H6_Color4: [textMainStyles.heading6, { color: StyleColors.Color4}],
  H6_COLOR_5_1: [textMainStyles.heading6, { color: StyleColors.Color5_1 }],
  H6_Color_0_1: [textMainStyles.heading6, { color: StyleColors.Color_0_1 }],
  H6_ROMAN: [textMainStyles.heading6, { fontFamily: 'AvenirLTStd-Roman'}],
  H6_ROMAN_Color4: [textMainStyles.heading6, { color: StyleColors.Color4, fontFamily: 'AvenirLTStd-Roman'}],
  H6_BEBAS: [textMainStyles.heading6, { fontFamily: 'Bebas-Regular'}],
  H6_BEBAS_Color_0_1: [textMainStyles.heading6, { color: StyleColors.Color_0_1, fontFamily: 'Bebas-Regular'}],
  H6_BEBAS_Color4: [textMainStyles.heading6, { color: StyleColors.Color4, fontFamily: 'Bebas-Regular'}],
  H6_BEBAS_Color2_2: [textMainStyles.heading6, {color: StyleColors.Color2_2, fontFamily: 'Bebas-Regular', }],
  H6_NEUE_Color2_2: [textMainStyles.heading6, {color: StyleColors.Color2_2, fontFamily: 'BebasNeue-Regular', }],
  H6_BEBAS_Color8_1: [textMainStyles.heading6, { color: StyleColors.Color8_1, fontFamily: 'Bebas-Regular'}],

  H6_BEBAS_Color8: [textMainStyles.heading6, {color: StyleColors.Color8, fontFamily: 'Bebas-Regular', }],
  H6_ROMAN_Color2_2: [textMainStyles.heading6, {color: StyleColors.Color2_2, fontFamily: 'AvenirLTStd-Roman', }],
  H6_ROMAN_Color0: [textMainStyles.heading6, {color: StyleColors.Color0, fontFamily: 'AvenirLTStd-Roman', }],
  H6_ROMAN_Color2_0: [textMainStyles.heading6, { color: StyleColors.Color2_0, fontFamily: 'AvenirLTStd-Roman' }],
  H6_ROMAN_Color5_1: [textMainStyles.heading6, { color: StyleColors.Color5_1, fontFamily: 'AvenirLTStd-Roman' }],
  H6_ROMAN_Color7_2: [textMainStyles.heading6, { color: StyleColors.Color7_2, fontFamily: 'AvenirLTStd-Roman' }],
  H6_ROMAN_Color6: [textMainStyles.heading6, { color: StyleColors.Color6, fontFamily: 'AvenirLTStd-Roman' }],

  H6_LIGHT_COLOR_5_1: [textMainStyles.heading6, { color: StyleColors.Color5_1, fontFamily: 'avenirltstd-light' }],
  H6_LIGHT_COLOR_6: [textMainStyles.heading6, { color: StyleColors.Color6, fontFamily: 'avenirltstd-light' }],
  H6_LIGHT_Color8: [textMainStyles.heading6, { color: StyleColors.Color8, fontFamily: 'avenirltstd-light' }],
  H6_LIGHT_Color2_0: [textMainStyles.heading6, { color: StyleColors.Color2_0, fontFamily: 'avenirltstd-light' }], // TODO
  H6_LIGHT_Color2_2: [textMainStyles.heading6, { color: StyleColors.Color2_2, fontFamily: 'avenirltstd-light' }],

  H7_COLOR_12: [textMainStyles.heading7, { color: StyleColors.Color12 }],

  P1: [textMainStyles.paragraph1],
  p1_Color_0_1: [textMainStyles.paragraph1, {color: StyleColors.Color_0_1}],
  p1_Color7_2: [textMainStyles.paragraph1, {color: StyleColors.Color7_2}],
  P1_BEBAS_Color_0_1: [textMainStyles.paragraph1, {color: StyleColors.Color_0_1, fontFamily: 'Bebas-Regular',}],
  P1_Color6_2: [textMainStyles.paragraph1, {color: StyleColors.Color6_2}],

  P1_Color5: [textMainStyles.paragraph1, {color: StyleColors.Color5}],
  P1_LIGHT: [textMainStyles.paragraph1, { fontFamily: 'avenirltstd-light' }],
  P1_ROMAN_Color5_1: [textMainStyles.paragraph1, { fontFamily: 'AvenirLTStd-Roman', color: StyleColors.Color5_1 }],
  P1_LIGHT_Color5_1: [textMainStyles.paragraph1, { fontFamily: 'avenirltstd-light', color: StyleColors.Color5_1 }],
  P1_BEBAS_Color5_1: [textMainStyles.paragraph1, { fontFamily: 'Bebas-Regular', color: StyleColors.Color5_1 }],
  P1_BEBAS_Color4:[textMainStyles.paragraph1, { fontFamily: 'Bebas-Regular', color: StyleColors.Color4 }],
  P1_M: [textMainStyles.paragraph1, { fontFamily: 'AvenirLTStd-Medium' }],
  P1_M_Color5_1: [textMainStyles.paragraph1, { fontFamily: 'AvenirLTStd-Medium', color: StyleColors.Color5_1 }],
  P1_M_Color6: [textMainStyles.paragraph1, { fontFamily: 'AvenirLTStd-Medium', color: StyleColors.Color6 }],

  P2: [textMainStyles.paragraph2],
  P2_Color2_0: [textMainStyles.paragraph2, { color: StyleColors.Color2_0 }],
  P2_Color4: [textMainStyles.paragraph2, { color: StyleColors.Color4 }],
  P2_COLOR_5: [textMainStyles.paragraph2, { color: StyleColors.Color5 }],
  P2_COLOR_5_1: [textMainStyles.paragraph2, { color: StyleColors.Color5_1 }],
  P2_COLOR_6: [textMainStyles.paragraph2, { color: StyleColors.Color6 }],
  P2_Color8_1: [textMainStyles.paragraph2, { color: StyleColors.Color8_1 }],

  P3_Color8_1: [textMainStyles.paragraph3, { color: StyleColors.Color8_1 }],
  P3_Color5_1: [textMainStyles.paragraph3, { color: StyleColors.Color5_1 }],

  P3_LIGHT_Color5_1: [textMainStyles.paragraph3, { color: StyleColors.Color5_1, fontFamily: 'avenirltstd-light', }],
  P3_ROMAN: [textMainStyles.paragraph3, { fontFamily: 'AvenirLTStd-Roman' }],
  P3_ROMAN_Color5: [textMainStyles.paragraph3, { fontFamily: 'AvenirLTStd-Roman', color: StyleColors.Color5 }],
  P3_BEBAS: [textMainStyles.paragraph3, { fontFamily: 'Bebas-Regular' }],


  P3_ROMAN_Color5_1: [textMainStyles.paragraph3, { color: StyleColors.Color5_1, fontFamily: 'AvenirLTStd-Roman' }],
  P3_ROMAN_Color_0_1: [textMainStyles.paragraph3, { color: StyleColors.Color_0_1, fontFamily: 'AvenirLTStd-Roman' }],

  P4_ROMAN: [textMainStyles.paragraph4, { fontFamily: 'AvenirLTStd-Roman' }],
  P4_LIGHT_Color7_1: [textMainStyles.paragraph4, { color: StyleColors.Color7_1, fontFamily: 'avenirltstd-light',  }],


};

