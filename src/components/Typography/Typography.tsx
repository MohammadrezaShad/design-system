import React, {forwardRef} from 'react';

import * as S from './Typography.styled';
import {TypeographyVariantMapping, TypographyProps} from './Typography.types';

const DEFAULT_VARIANTMAPPING: TypeographyVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button1: 'button',
  button2: 'button',
  button3: 'button',
  caption: 'span',
  overline: 'span',
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      align,
      children,
      color = 'text.primary',
      display,
      noWrap,
      paragraph,
      gutter,
      gutterBottom,
      gutterRight,
      gutterTop,
      component,
      variant = 'body1',
      variantMapping = DEFAULT_VARIANTMAPPING,
      text,
      ellipsisTextOverflow,
    },
    ref,
  ) => (
    <S.Typography
      as={component || variantMapping[variant]}
      ref={ref}
      $align={align}
      $color={color}
      $display={display}
      $noWrap={noWrap}
      $paragraph={paragraph}
      $gutter={gutter}
      $gutterBottom={gutterBottom}
      $gutterRight={gutterRight}
      $gutterTop={gutterTop}
      $variant={variant}
      $ellipsisTextOverflow={ellipsisTextOverflow}
    >
      {text}
      {children}
    </S.Typography>
  ),
);

export default Typography;

Typography.displayName = 'Typography';
