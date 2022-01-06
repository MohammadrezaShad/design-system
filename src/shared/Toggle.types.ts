import {ReactNode} from 'react';

import {MainColor} from '../styles/createColors';
import {ReactFocusEvent, ReactMouseEvent} from './Main.types';

export type Direction = 'rtl' | 'ltr';

export enum ToggleActionTypes {
  TOGGLE = 'TOGGLE',
  RESET = 'RESET',
}
export type ToggleAction =
  | {type: ToggleActionTypes.RESET; initialState: ToggleState}
  | {type: ToggleActionTypes.TOGGLE};

export type ToggleState = {
  on?: boolean;
};

export type ToggleReducer = (
  state: ToggleState,
  action: ToggleAction,
) => ToggleState;

export type ToggleOnChange = (
  reducer: ToggleState,
  action: ToggleAction,
) => void;

export type UseToggleArgs = {
  initialOn?: boolean;
  on?: boolean;
  reducer?: ToggleReducer;
  onChange?: ToggleOnChange;
  readOnly?: boolean;
};

export type ToggleArgs = {$on?: boolean};
export type ToggleColorArgs = {
  $toggleColor: MainColor;
  $highlightColor?: string;
};
export type WrapArgs = {
  $disabled?: boolean;
  $hasHover?: boolean;
  $hasFocus?: boolean;
} & ToggleColorArgs;

export type ToggleProps = {
  children?: ReactNode;
  onChange?: ToggleOnChange;
  onFocus?: ReactFocusEvent<HTMLInputElement>;
  onBlur?: ReactFocusEvent<HTMLInputElement>;
  onClick?: ReactMouseEvent<HTMLInputElement>;
  on?: boolean;
  initialOn?: boolean;
  text?: string | number | symbol;
  direction?: Direction;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
  hasHover?: boolean;
  hasFocus?: boolean;
  toggleColor?: MainColor;
  highlightColor?: string;
  value?: number | string;
  reducer?: ToggleReducer;
  readOnly?: boolean;
};
