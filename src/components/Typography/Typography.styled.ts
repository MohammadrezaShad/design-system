import styled, {css} from 'styled-components';

import getDefaultThemeColor from '../../styles/utils/getDefaultThemeColor';
import {SetTypographyGutter, TypographyStyledProps} from './Typography.types';

const PARAGRAPH_GUTTER = 2;

export const Typography = styled.span<TypographyStyledProps>`
  display: ${({$display}) => $display};
  color: ${({theme, $color}) => getDefaultThemeColor(theme, $color)};
  text-align: ${({$align}) => $align};
  white-space: ${({$noWrap, $ellipsisTextOverflow}) =>
    $noWrap || $ellipsisTextOverflow ? 'nowrap' : null};
  text-overflow: ${({$ellipsisTextOverflow}) =>
    $ellipsisTextOverflow ? 'ellipsis' : null};
  overflow: ${({$ellipsisTextOverflow}) =>
    $ellipsisTextOverflow ? 'hidden' : null};
  ${({theme, $variant}) => theme.typography.variants[$variant]};
  ${setTypographyGutter};
`;

function setTypographyGutter({
  theme,
  $gutter,
  $gutterTop,
  $gutterBottom,
  $gutterLeft,
  $gutterRight,
  $paragraph,
}: SetTypographyGutter) {
  if (
    $gutterTop &&
    !($gutter || $gutterBottom || $gutterLeft || $gutterRight || $paragraph)
  ) {
    return css`
      margin-top: ${theme.spacing($gutterTop)};
    `;
  }

  if (
    $gutterRight &&
    !($gutter || $gutterBottom || $gutterLeft || $gutterTop || $paragraph)
  ) {
    return css`
      margin-right: ${theme.spacing($gutterRight)};
    `;
  }

  if (
    ($gutterBottom || $paragraph) &&
    !($gutter || $gutterTop || $gutterLeft || $gutterRight)
  ) {
    return css`
      margin-bottom: ${theme.spacing($gutterBottom || PARAGRAPH_GUTTER)};
    `;
  }

  if (
    $gutterLeft &&
    !($gutter || $gutterBottom || $gutterTop || $gutterRight || $paragraph)
  ) {
    return css`
      margin-left: ${theme.spacing($gutterLeft)};
    `;
  }

  if (
    $gutter &&
    !($gutterTop || $gutterBottom || $gutterLeft || $gutterRight || $paragraph)
  ) {
    return css`
      margin: ${theme.spacing($gutter)};
    `;
  }

  if (
    $gutterTop ||
    $gutterBottom ||
    $gutterLeft ||
    $gutterRight ||
    $paragraph
  ) {
    return css`
      margin: ${`${theme.spacing($gutterTop || $gutter || 0)}
        ${theme.spacing($gutterRight || $gutter || 0)}
        ${theme.spacing(
          $gutterBottom ||
            ($paragraph ? PARAGRAPH_GUTTER : null) ||
            $gutter ||
            0,
        )}
        ${theme.spacing($gutterLeft || $gutter || 0)}`};
    `;
  }
  return null;
}
