import styled from 'styled-components';

import {
  AlertSeverity,
  AlertStyledProps,
  AlertVariant,
  GetAlertBackgroundColor,
  GetAlertColor,
} from './Alert.types';

export const Alert = styled.div<AlertStyledProps>`
  display: flex;
  flex-direction: column;
  padding: ${({theme}) => theme.spacing(4)};
  box-shadow: ${({theme}) => theme.shadows.large};
  border-radius: ${({theme}) => theme.radius.medium};
  background-color: ${getAlertBackgroundColor};
  border: ${({theme, $variant, $severity}) =>
    $variant === 'outlined'
      ? `1px solid ${getAlertColor({theme, $severity})}`
      : null};
  min-height: ${({theme, $bottomContent}) =>
    $bottomContent ? theme.pxToRem(124) : theme.pxToRem(76)};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.span<{$variant: AlertVariant}>`
  ${({theme}) => theme.typography.variants.h4};
  color: ${({theme, $variant}) =>
    $variant === 'filled'
      ? theme.colors.text.invert
      : theme.colors.text.primary};
  &:not(:last-child) {
    margin-bottom: ${({theme}) => theme.spacing(2)};
  }
`;

export const Text = styled.span<{$variant: AlertVariant}>`
  display: inline-flex;
  ${({theme}) => theme.typography.variants.body2};
  color: ${({theme, $variant}) =>
    $variant === 'filled'
      ? theme.colors.text.invert
      : theme.colors.text.primary};
`;

export const Bottom = styled.div`
  &:not(:first-child) {
    margin-top: ${({theme}) => theme.spacing(3)};
    margin-right: ${({theme}) => theme.spacing(7)};
  }
`;

export const IconWrap = styled.div`
  padding-left: ${({theme}) => theme.spacing(3)};
`;

export const Icon = styled.span<{
  $severity?: AlertSeverity;
  $variant: AlertVariant;
}>`
  width: ${({theme}) => theme.pxToRem(32)};
  color: ${({theme, $severity, $variant}) =>
    $variant === 'filled'
      ? theme.colors.surface.origin
      : getAlertColor({theme, $severity})};
`;

export const Action = styled.div`
  margin-right: auto;
  padding-right: ${({theme}) => theme.spacing(3)};
`;

function getAlertBackgroundColor({
  $severity,
  theme,
  $variant,
}: GetAlertBackgroundColor) {
  switch ($variant) {
    case 'outlined':
    case 'standard':
      return theme.colors.surface.origin;
    case 'filled':
      return getAlertColor({$severity, theme});
    default:
      return theme.colors.surface.origin;
  }
}

function getAlertColor({$severity, theme}: GetAlertColor) {
  switch ($severity) {
    case 'error':
      return theme.colors.danger.origin;
    case 'success':
      return theme.colors.success.origin;
    case 'warning':
      return theme.colors.warning.origin;
    case 'info':
    default:
      return theme.colors.info.origin;
  }
}
