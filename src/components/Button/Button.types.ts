import {ElementType, ReactNode} from 'react';
import {DefaultTheme} from 'styled-components';

import {Component, ReactMouseEvent} from '../../shared/Main.types';
import {MainColor} from '../../styles/createColors';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonColor = MainColor | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children?: ReactNode;
  component?: Component;
  variant?: ButtonVariant;
  color?: ButtonColor;
  textColor?: string;
  highlightColor?: string;
  size?: ButtonSize;
  fullWidth?: boolean;
  to?: string;
  href?: string;
  type?: string;
  startIcon?: string | ElementType | JSX.Element;
  endIcon?: string | ElementType | JSX.Element;
  text?: ReactNode | string | number;
  hasHover?: boolean;
  hasFocus?: boolean;
  hasActive?: boolean;
  disabled?: boolean;
  onClick?: ReactMouseEvent<ElementType>;
  noPadding?: boolean;
};

export type ButtonStyledProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  textColor?: string;
  highlightColor?: string;
  size?: ButtonSize;
  fullWidth?: boolean;
  hasHover?: boolean;
  hasFocus?: boolean;
  hasActive?: boolean;
  disabled?: boolean;
  noPadding?: boolean;
};

export type ButtonStyledMethodProps = {
  theme: DefaultTheme;
} & ButtonStyledProps;

export type ActionStyle = {
  color: string;
  textColor?: string;
  highlightColor?: string;
  theme: DefaultTheme;
};

export type RenderIcon = {
  icon?: string | ElementType | JSX.Element;
  hasStartIcon: boolean;
  hasEndIcon: boolean;
};
