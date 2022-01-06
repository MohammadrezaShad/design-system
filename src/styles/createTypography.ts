/* eslint-disable @typescript-eslint/no-shadow */
import {CSSProperties} from 'react';
import {SimpleInterpolation} from 'styled-components';

export const dsRtlFontFamily = `IRANYekan, Arial, Tahoma, Helvetica`;
export const dsLtrFontFamily = `"Ubuntu","Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
export const dsMonospaceFontFamily = `"Roboto Mono", "SFMono-Regular", "Menlo", "Monaco",
"Consolas", "Liberation Mono", "Courier New", "monospace"`;

export const dsFontSize = 16;
export const defaultHtmlFontSize = 16;
export const dsFontWeight = {
  light: 300,
  regular: 400,
  bold: 600,
};

export type VariantNames =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button1'
  | 'button2'
  | 'button3'
  | 'caption'
  | 'overline';

export interface VariantProps {
  h1: SimpleInterpolation;
  h2: SimpleInterpolation;
  h3: SimpleInterpolation;
  h4: SimpleInterpolation;
  subtitle1: SimpleInterpolation;
  subtitle2: SimpleInterpolation;
  body1: SimpleInterpolation;
  body2: SimpleInterpolation;
  button1: SimpleInterpolation;
  button2: SimpleInterpolation;
  button3: SimpleInterpolation;
  caption: SimpleInterpolation;
  overline: SimpleInterpolation;
}

export interface FontWeights {
  light: number;
  regular: number;
  bold: number;
}

export interface FontFamilies {
  ltr: string;
  rtl: string;
  monospace: string;
}

export interface Typography {
  fontWeight: FontWeights;
  fontFamily: FontFamilies;
  fontSize: number;
  htmlFontSize: number;
  useText: (textProperties: {
    fontSize?: string | number;
    fontWeight?: CSSProperties['fontWeight'];
    lineHeight?: string | number;
    color?: CSSProperties['color'];
  }) => SimpleInterpolation;
  pxToRem: (size: number) => string;
  remToPx: (size: number) => string;
  variants: VariantProps;
}

export interface TypographyInputs {
  fontSize?: number;
  htmlFontSize?: number;
  ltrFontFamily?: string;
  rtlFontFamily?: string;
  monospaceFontFamily?: string;
}

export interface TextProperties {
  fontSize?: string | number;
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: string | number;
  color?: CSSProperties['color'];
}

const createTypography = (typography: TypographyInputs): Typography => {
  const {
    fontSize = dsFontSize,
    htmlFontSize = defaultHtmlFontSize,
    ltrFontFamily = dsLtrFontFamily,
    rtlFontFamily = dsRtlFontFamily,
    monospaceFontFamily = dsMonospaceFontFamily,
  } = typography;
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      // eslint-disable-next-line no-console
      console.error('DS: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      // eslint-disable-next-line no-console
      console.error('DS: `htmlFontSize` is required to be a number.');
    }
  }

  const round = (number: number, decimalPlaces = 3) => {
    // eslint-disable-next-line no-restricted-properties
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
  };

  const coef = fontSize / dsFontSize;
  const pxToRem = (size: number) =>
    // eslint-disable-next-line no-restricted-globals
    typeof size === 'number' && !isNaN(size)
      ? `${round((size / htmlFontSize) * coef)}rem`
      : '';

  const remToPx = (size: number) =>
    // eslint-disable-next-line no-restricted-globals
    typeof size === 'number' && !isNaN(size)
      ? `${round((size * htmlFontSize) / coef)}px`
      : '';

  const useText = (textProperties: TextProperties = {}) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      fontSize = pxToRem(16),
      fontWeight = dsFontWeight.regular,
      lineHeight = 2,
      color,
    } = textProperties;

    return {
      lineHeight,
      fontSize,
      fontWeight,
      color,
      fontStyle: 'normal',
      fontFamily: 'inherit',
      fontStretch: 'normal',
      letterSpacing: 'normal',
      textSizeAdjust: '100%',
    };
  };

  const buildVariant = (
    fontWeight: number,
    fontSize: number,
    lineHeight: number,
  ) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useText({fontSize: pxToRem(fontSize), fontWeight, lineHeight});

  const variants = {
    h1: buildVariant(dsFontWeight.bold, 32, 1.5),
    h2: buildVariant(dsFontWeight.bold, 28, 1.5),
    h3: buildVariant(dsFontWeight.bold, 24, 1.5),
    h4: buildVariant(dsFontWeight.bold, 18, 1.5),
    subtitle1: buildVariant(dsFontWeight.bold, 16, 1.5),
    subtitle2: buildVariant(dsFontWeight.bold, 14, 1.5),
    body1: buildVariant(dsFontWeight.regular, 16, 1.5),
    body2: buildVariant(dsFontWeight.regular, 14, 1.5),
    button1: buildVariant(dsFontWeight.regular, 18, 1.5),
    button2: buildVariant(dsFontWeight.regular, 14, 1.5),
    button3: buildVariant(dsFontWeight.regular, 12, 1.5),
    caption: buildVariant(dsFontWeight.regular, 12, 1.5),
    overline: buildVariant(dsFontWeight.regular, 12, 1.5),
  };

  return {
    fontWeight: dsFontWeight,
    fontFamily: {
      ltr: ltrFontFamily,
      rtl: rtlFontFamily,
      monospace: monospaceFontFamily,
    },
    pxToRem,
    remToPx,
    fontSize,
    htmlFontSize,
    useText,
    variants,
  };
};

export default createTypography;
