import styled from 'styled-components';

import {getMainThemeColor} from '../../../styles';
import {MainColor} from '../../../styles/createColors';
import {ProgressSize} from '../Progress.types';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Track = styled.div<{$size: ProgressSize}>`
  display: flex;
  height: ${({theme, $size}) => theme.pxToRem(getLinearProgressSize($size))};
  background-color: ${({theme}) => theme.colors.stroke.origin};
  width: 200px;
  overflow: hidden;
`;

export const Progress = styled.div<{
  $value: number;
  progressColor: MainColor;
  highlightColor?: string;
}>`
  flex: 1;
  transform-origin: left;
  background-color: ${({theme, progressColor, highlightColor}) =>
    highlightColor || getMainThemeColor(theme, progressColor)};
  transform: ${({$value}) => `translateX(-${100 - $value}%)`};
  transition: all ${({theme}) => theme.transition.duration};
  will-change: transform;
`;

export const Label = styled.span`
  display: inline-block;
  ${({theme}) => theme.typography.variants.caption};
  color: ${({theme}) => theme.colors.text.primary};
  margin: ${({theme}) =>
    theme.direction === 'ltr'
      ? `0 ${theme.spacing(3)} 0 0`
      : `0 0 0 ${theme.spacing(3)}`};
`;

function getLinearProgressSize(size: ProgressSize) {
  switch (size) {
    case 'medium':
      return 4;
    case 'large':
      return 8;
    case 'small':
      return 1;
    default:
      return 4;
  }
}
