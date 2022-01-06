import {ElementType, ReactNode} from 'react';

import {ReactMouseEvent} from '../../shared';
import {DefaultTheme} from '../../styles';

export type AlertSeverity = 'info' | 'success' | 'error' | 'warning';
export type AlertIcon = string | JSX.Element;
export type AlertVariant = 'filled' | 'outlined' | 'standard';
export type AlertAction = string | JSX.Element;

export type AlertProps = {
  severity?: AlertSeverity;
  icon?: AlertIcon;
  hasIcon?: boolean;
  variant?: AlertVariant;
  onClick?: ReactMouseEvent<ElementType>;
  action?: AlertAction;
  title?: string;
  text?: string;
  bottomContent?: ReactNode;
};

export type AlertStyledProps = {
  $severity?: AlertSeverity;
  $variant?: AlertVariant;
  $bottomContent?: boolean;
};

export type GetAlertColor = {
  $severity?: AlertSeverity;
  theme: DefaultTheme;
};

export type GetAlertBackgroundColor = {
  $severity?: AlertSeverity;
  $variant?: AlertVariant;
  theme: DefaultTheme;
};
