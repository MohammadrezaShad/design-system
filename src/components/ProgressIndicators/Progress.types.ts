import {MainColor} from '../../styles/createColors';

export type ProgressSize = 'small' | 'medium' | 'large';

export type Progress = {
  value?: number;
  size?: ProgressSize;
  hasLabel?: boolean;
  progressColor?: MainColor;
  highlightColor?: string;
};
