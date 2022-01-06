import styled, {css} from 'styled-components';

import {Breakpoint} from '../../styles';
import {DefaultTheme} from '../../styles/defaultTheme';
import {GridBreakpoint, GridBreakpoints, GridProps} from './Grid.types';

const gridColumns = 12;

const autoBreakpointStyles = `
  flex-grow: 0;
  max-width: none;
  flex-basis: auto;
`;

const trueBreakpointStyles = `
  flex-grow: 1;
  max-width: 100%;
  flex-basis: 0;
`;

export const Grid = styled.div<GridProps>`
  ${props => {
    const {container, item} = props;
    return css`
      ${container ? containerGlobalStyles : null};
      ${item ? itemGlobalStyles : null}
    `;
  }}
`;

function containerGlobalStyles({
  justify,
  alignItems,
  direction,
  wrap,
  spacing,
  theme,
  zeroMinWidth,
}: GridProps & {theme: DefaultTheme}) {
  return css`
    display: flex;
    box-sizing: border-box;
    justify-content: ${justify || null};
    align-items: ${alignItems || null};
    flex-direction: ${direction || null};
    flex-wrap: ${wrap || null};
    min-width: ${zeroMinWidth ? 0 : null};
    width: ${spacing ? `calc(100% + ${theme.spacing(spacing)})` : '100%'};
    margin: ${spacing ? `calc(-${theme.spacing(spacing)} / 2)` : null};
    & > * {
      padding: ${spacing ? `calc(${theme.spacing(spacing)} / 2)` : null};
    }
  `;
}

function itemGlobalStyles({
  alignContent,
  xlg,
  lg,
  md,
  sm,
  xs,
  xxs,
  theme,
}: GridProps & {theme: DefaultTheme}) {
  return css`
    box-sizing: border-box;
    align-content: ${alignContent || null};
    ${generateBreakpoint({xxs, xs, sm, md, lg, xlg}, theme)}
  `;
}

function generateBreakpoint(breakpoints: GridBreakpoints, theme: DefaultTheme) {
  const breakpointKeys = Object.keys(breakpoints) as Breakpoint[];
  let styles = '';
  breakpointKeys.forEach(breakpointKey => {
    if (breakpoints[breakpointKey]) {
      const cssMediaQuery = theme.breakpoints.up(breakpointKey);
      styles += `${cssMediaQuery}{${getBreakpointStyle(
        breakpoints[breakpointKey],
      )}}`;
    }
  });
  return styles;
}

function getBreakpointStyle(breakpointSize?: GridBreakpoint) {
  if (breakpointSize === 'auto') {
    return autoBreakpointStyles;
  }
  if (String(breakpointSize) === 'true') {
    return trueBreakpointStyles;
  }
  if (
    breakpointSize &&
    typeof breakpointSize !== 'boolean' &&
    +breakpointSize >= 1 &&
    +breakpointSize <= gridColumns
  ) {
    return getGridColumnStyle(+breakpointSize);
  }
  return '';
}

function getGridColumnStyle(columnValue: number) {
  return `
  flex-grow: 0;
  max-width: ${getAreaWidth(columnValue)};
  flex-basis: ${getAreaWidth(columnValue)};
`;
}

function getAreaWidth(columnValue: number) {
  return `${
    Math.round(((columnValue / gridColumns) * 100 + Number.EPSILON) * 1000) /
    1000
  }%`;
}
