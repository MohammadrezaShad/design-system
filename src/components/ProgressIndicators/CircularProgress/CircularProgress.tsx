import React, {FC} from 'react';

import {Progress} from '../Progress.types';
import * as S from './CircularProgress.styled';

const Circular: FC<Progress> = ({
  value = 0,
  hasLabel,
  size = 'medium',
  progressColor = 'primary',
  highlightColor,
}) => (
  <S.Wrap $size={size}>
    <S.Track viewBox="22 22 44 44" $size={size}>
      <circle cx="44" cy="44" r="20" fill="none" />
    </S.Track>
    <S.ProgressWrap $size={size}>
      <S.Progress
        viewBox="22 22 44 44"
        $value={value}
        $size={size}
        progressColor={progressColor}
        highlightColor={highlightColor}
      >
        <circle cx="44" cy="44" r="20" fill="none" />
      </S.Progress>
    </S.ProgressWrap>
    {hasLabel ? <S.Label>{value}%</S.Label> : null}
  </S.Wrap>
);

export default Circular;
