import {ReactNode} from 'react';

import {DefaultTheme} from '../styles/defaultTheme';
import {ReactFocusEvent, ReactMouseEvent} from './Main.types';

export enum FieldActionTypes {
  CHANGE = 'CHANGE',
  RESET = 'RESET',
}
export type FieldAction =
  | {type: FieldActionTypes.RESET; initialState: FieldState}
  | {type: FieldActionTypes.CHANGE; payload: string};

export type FieldState = {
  value?: string;
};

export type FieldReducer = (
  state: FieldState,
  action: FieldAction,
) => FieldState;

export type FieldOnChange = (reducer: FieldState, action: FieldAction) => void;

export type UseFieldArgs = {
  initialValue?: string;
  reducer?: FieldReducer;
  onChange?: FieldOnChange;
  readOnly?: boolean;
} & FieldState;

export type WithFieldWrapProps = {
  subChildren?: boolean;
  label?: boolean;
  helperText?: boolean;
  id?: string;
};

export type FieldSize = 'medium' | 'small';
export type FieldVariant = 'filled' | 'outlined' | 'standard';

export type FieldProps = {
  autoComplete?: 'off' | 'on';
  autoFocus?: boolean;
  initialValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string | number;
  error?: boolean;
  success?: boolean;
  helperText?: string | number;
  required?: boolean;
  type?: string;
  icon?: string | JSX.Element;
  placeholder?: string;
  value?: string;
  id?: string;
  size?: FieldSize;
  variant?: FieldVariant;
  onChange?: FieldOnChange;
  onFocus?: ReactFocusEvent<HTMLInputElement>;
  onBlur?: ReactFocusEvent<HTMLInputElement>;
  onClick?: ReactMouseEvent<HTMLInputElement>;
  onIconClick?: ReactMouseEvent<HTMLInputElement>;
  reducer?: FieldReducer;
  readOnly?: boolean;
  children?: ReactNode;
};

export type FieldStyledProps = {
  $error?: boolean;
  $disabled?: boolean;
  $icon?: boolean;
  $fullWidth?: boolean;
  $variant?: FieldVariant;
  $size?: FieldSize;
  $success?: boolean;
};

export type FiledStyledAction = {
  theme: DefaultTheme;
  $error?: boolean;
  $disabled?: boolean;
  $icon?: boolean;
  $fullWidth?: boolean;
  $success?: boolean;
};
