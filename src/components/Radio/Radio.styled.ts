import styled, {css} from 'styled-components';

import {ToggleArgs, ToggleColorArgs, WrapArgs} from '../../shared/Toggle.types';
import {getMainThemeColor} from '../../styles';

export const Layout = styled.span<ToggleArgs & ToggleColorArgs>`
  display: inline-block;
  width: ${({theme}) => theme.pxToRem(24)};
  height: ${({theme}) => theme.pxToRem(24)};
  border: ${({theme, $on, $highlightColor, $toggleColor}) =>
    `2px solid ${
      $on
        ? $highlightColor || getMainThemeColor(theme, $toggleColor)
        : theme.colors.stroke.origin
    }`};
  border-radius: ${({theme}) => theme.radius.large};
  background-color: ${({theme, $on, $highlightColor, $toggleColor}) =>
    $on
      ? $highlightColor || getMainThemeColor(theme, $toggleColor)
      : 'transparent'};
  transition: ${({theme}) => `all ${theme.transition.duration} `};
  box-shadow: 0 0 0 0 transparent;
`;

export const Wrap = styled.div<WrapArgs>`
  display: inline-flex;
  padding: ${({theme}) => theme.spacing(4)};
  position: relative;
  cursor: ${({$disabled}) => ($disabled ? null : 'pointer')};

  ${({$disabled, $hasFocus, theme, $highlightColor, $toggleColor}) =>
    $disabled || !$hasFocus
      ? null
      : css`
          &:focus-within {
            ${Layout} {
              box-shadow: ${theme.shadows.small},
                0px 0px 0px 4px
                  ${theme.colors.tint(
                    $highlightColor || getMainThemeColor(theme, $toggleColor),
                    0.8,
                  )};
            }
          }
        `}
  ${({$disabled, $hasHover, theme, $highlightColor, $toggleColor}) =>
    $disabled || !$hasHover
      ? null
      : css`
          &:hover{
            ${Layout} {
              box-shadow: ${theme.shadows.small},
                0px 0px 0px 4px
                  ${theme.colors.tint(
                    $highlightColor || getMainThemeColor(theme, $toggleColor),
                    0.8,
                  )};
            }          
        `}
`;

export const Container = styled.div<{
  $disabled?: boolean;
}>`
  display: inline-flex;
  direction: ltr;
  flex: 0 0 auto;
  opacity: ${({$disabled}) => ($disabled ? '0.3' : null)};
`;

export const Input = styled.input<{$disabled?: boolean}>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: ${({$disabled}) => ($disabled ? null : 'pointer')};
`;

export const Thumb = styled.span<ToggleArgs>`
  display: inline-block;
  width: ${({theme}) => theme.pxToRem(8)};
  height: ${({theme}) => theme.pxToRem(8)};
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.surface.origin};
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  right: 50%;
  transition: ${({theme}) => `all ${theme.transition.duration}`};
  opacity: ${({$on}) => ($on ? 1 : 0)};
`;

export const Text = styled.span`
  display: inline-block;
  color: ${({theme}) => theme.colors.text.primary};
`;
