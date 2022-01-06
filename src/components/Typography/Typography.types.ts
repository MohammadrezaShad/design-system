import {ReactNode} from 'react';

import {Component} from '../../shared';
import {DefaultColor, DefaultTheme, VariantNames} from '../../styles';

export type TypographyAlign =
  | 'inherit'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

export type TypeographyVariantMapping = {
  [key in VariantNames]: string;
};

export type TypographyDisplay =
  | 'initial'
  | 'block'
  | 'inline'
  | 'flex'
  | 'inline-flex';

export type TypographyProps = {
  children?: ReactNode;
  align?: TypographyAlign;
  color?: DefaultColor;
  component?: Component;
  variant?: VariantNames;
  variantMapping?: TypeographyVariantMapping;
  noWrap?: boolean;
  display?: TypographyDisplay;
  paragraph?: boolean;
  gutter?: number;
  gutterBottom?: number;
  gutterTop?: number;
  gutterRight?: number;
  gutterleft?: number;
  text?: string | number | symbol;
  ellipsisTextOverflow?: boolean;
};

export type TypographyStyledProps = {
  $align?: TypographyAlign;
  $color: DefaultColor;
  $variant: VariantNames;
  $noWrap?: boolean;
  $display?: TypographyDisplay;
  $paragraph?: boolean;
  $gutter?: number;
  $gutterBottom?: number;
  $gutterTop?: number;
  $gutterRight?: number;
  $gutterLeft?: number;
  $ellipsisTextOverflow?: boolean;
};

export type SetTypographyGutter = {
  theme: DefaultTheme;
  $gutter?: number;
  $gutterBottom?: number;
  $gutterTop?: number;
  $gutterRight?: number;
  $gutterLeft?: number;
  $paragraph?: boolean;
};
