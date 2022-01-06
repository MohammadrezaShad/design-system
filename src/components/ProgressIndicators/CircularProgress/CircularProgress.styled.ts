import styled, {css, keyframes} from 'styled-components';

import {getMainThemeColor} from '../../../styles';
import {MainColor} from '../../../styles/createColors';
import {ProgressSize} from '../Progress.types';

const SIZE = 40;

const rotate = keyframes`
  from {
    transform-origin:50% 50%;
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrap = styled.div<{$size: ProgressSize}>`
  position: relative;
  height: ${({theme, $size}) => theme.pxToRem(getCircularSize($size))};
  width: ${({theme, $size}) => theme.pxToRem(getCircularSize($size))};
`;

export const Track = styled.svg<{$size: ProgressSize}>`
  CIRCLE {
    stroke-width: ${({$size}) => `${getThickness($size)}px`};
    stroke: ${({theme}) => theme.colors.stroke.origin};
  }
`;

export const ProgressWrap = styled.div<{$size: ProgressSize}>`
  display: inline-block;
  left: 0;
  position: absolute;
  height: ${({theme, $size}) => theme.pxToRem(getCircularSize($size))};
  width: ${({theme, $size}) => theme.pxToRem(getCircularSize($size))};
  animation: ${rotate} 1.5s infinite linear;
`;

export const Progress = styled.svg<{
  $value: number;
  $size: ProgressSize;
  progressColor: MainColor;
  highlightColor?: string;
}>`
  ${({$value}) => setStrokeStyles($value)};
  will-change: stroke-dasharray;
  transition: all ${({theme}) => theme.transition.duration};
  CIRCLE {
    stroke-width: ${({$size}) => `${getThickness($size)}px`};
    stroke: ${({theme, progressColor, highlightColor}) =>
      highlightColor || getMainThemeColor(theme, progressColor)};
  }
`;

export const Label = styled.span`
  display: inline-block;
  ${({theme}) => theme.typography.variants.caption};
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

function getCircularSize(size: ProgressSize) {
  switch (size) {
    case 'large':
      return 72;
    case 'medium':
      return 48;
    case 'small':
      return 24;
    default:
      return 48;
  }
}

function setStrokeStyles(value: number) {
  const circumference = 2 * Math.PI * (SIZE / 2);
  const strokeDasharray = circumference.toFixed(3);
  const strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(
    3,
  )}px`;

  return css`
    stroke-dasharray: ${strokeDasharray};
    stroke-dashoffset: ${strokeDashoffset};
  `;
}

function getThickness(size: ProgressSize) {
  switch (size) {
    case 'medium':
      return 4;
    case 'small':
      return 2;
    default:
      return 4;
  }
}
