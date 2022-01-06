import styled, {css} from 'styled-components';

import {FieldStyledProps, FiledStyledAction} from '../../shared/Field.types';

const fieldDefaultStyle = css`
  display: block;
  color: currentColor;
  font: inherit;
  width: 100%;
  border: 0;
  outline: none;
  background: none;
  box-sizing: border-box;
  margin: 0;
  letter-spacing: inherit;
  -webkit-tap-highlight-color: transparent;
`;

export const Wrap = styled.div<{$disabled?: boolean}>`
  position: relative;
  opacity: ${({$disabled}) => ($disabled ? 0.3 : null)};
`;

export const Field = styled.input<FieldStyledProps>`
  ${fieldDefaultStyle}
  ${setFiledGlobalStyle}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({theme}) => theme.spacing(3)};
  ${({theme}) => theme.typography.variants.body1};
  color: ${({theme}) => theme.colors.text.primary};
`;

export const Help = styled.span<{$error?: boolean; $success?: boolean}>`
  display: flex;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing(2)};
  ${({theme}) => theme.typography.variants.caption};
  color: ${getHelpColor};
`;

export const Icon = styled.span<{$disabled?: boolean}>`
  display: inline-flex;
  align-items: center;
  width: ${({theme}) => theme.pxToRem(20)};
  color: ${({theme}) => theme.colors.text.primary};
  position: absolute;
  top: 50%;
  left: ${({theme}) => (theme.direction === 'rtl' ? theme.spacing(4) : null)};
  right: ${({theme}) => (theme.direction === 'ltr' ? theme.spacing(4) : null)};
  transform: translateY(-50%);
  cursor: ${({$disabled}) => ($disabled ? 'default' : 'pointer')};
`;

export const ErrorIcon = styled.span`
  color: ${({theme}) => theme.colors.danger.origin};
  width: ${({theme}) => theme.pxToRem(16)};
  margin-left: ${({theme}) => theme.spacing(2)};
`;

function setFiledGlobalStyle({
  theme,
  $error,
  $disabled,
  $icon,
  $fullWidth,
  $success,
}: FiledStyledAction) {
  return css`
    color: ${theme.colors.text.primary};
    border: 1px solid ${getBorderColor({theme, $error, $success})};
    min-height: ${theme.pxToRem(36)};
    ${theme.typography.variants.body1};
    cursor: ${$disabled ? 'default' : 'text'};
    padding: 0
      ${$icon && theme.direction === 'ltr'
        ? theme.spacing(7)
        : theme.spacing(4)}
      0
      ${$icon && theme.direction === 'rtl'
        ? theme.spacing(7)
        : theme.spacing(4)};
    border-radius: ${theme.radius.small};
    width: ${$fullWidth ? '100%' : null};
    ::placeholder {
      ${theme.typography.variants.body2};
      color: ${theme.colors.text.secondary};
    }
  `;
}

function getHelpColor({theme, $error, $success}: FiledStyledAction) {
  if ($error) {
    return theme.colors.danger.origin;
  }
  if ($success) {
    return theme.colors.success.origin;
  }
  return theme.colors.text.primary;
}

function getBorderColor({theme, $error, $success}: FiledStyledAction) {
  if ($error) {
    return theme.colors.danger.origin;
  }
  if ($success) {
    return theme.colors.success.origin;
  }
  return theme.colors.stroke.origin;
}
