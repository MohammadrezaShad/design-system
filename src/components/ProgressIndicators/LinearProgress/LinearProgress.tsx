import React, {FC} from 'react';

import {Progress} from '../Progress.types';
import * as S from './LinearProgress.styled';

const Linear: FC<Progress> = ({
  hasLabel,
  size = 'medium',
  value = 0,
  progressColor = 'primary',
  highlightColor,
}) => (
  <S.Wrap>
    {hasLabel ? <S.Label>{value}%</S.Label> : null}
    <S.Track $size={size}>
      <S.Progress
        $value={value}
        progressColor={progressColor}
        highlightColor={highlightColor}
      />
    </S.Track>
  </S.Wrap>
);

export default Linear;
