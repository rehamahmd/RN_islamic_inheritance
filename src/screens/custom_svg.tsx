import * as React from 'react';
import { SvgCss, SvgXml } from 'react-native-svg';

export default function CustomSvg(props:any) {return <SvgXml xml={props.svgXmlData} fill={props.fill}  height={props.height} width={props.width}/>;}
