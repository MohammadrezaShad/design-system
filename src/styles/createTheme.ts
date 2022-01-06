import {deepMerge} from '../utils';
import createBreakpoints, {
  Breakpoints,
  BreakpointsInputs,
} from './createBreakpoints';
import createColors, {ColorsInputs, IColors} from './createColors';
import createRadiuses, {Radius, RadiusInput} from './createRadiuses';
import createShadows, {ShadowInputs, Shadows} from './createShadows';
import createSpacings, {Spacings, SpacingsInputs} from './createSpacings';
import createTransitionProperties, {
  TransitionPropertiesInputs,
} from './createTransitionProperties';
import createTypography, {
  Typography,
  TypographyInputs,
} from './createTypography';

export interface ThemeOptions {
  breakpoints?: BreakpointsInputs;
  colors?: ColorsInputs;
  typography?: TypographyInputs;
  spacings?: SpacingsInputs;
  darkMode?: boolean;
  shadows?: ShadowInputs;
  radiuses?: RadiusInput;
  transition?: TransitionPropertiesInputs;
  direction?: 'rtl' | 'ltr';
}

export interface Theme {
  breakpoints: Breakpoints;
  colors: IColors;
  typography: Typography;
  spacing: Spacings;
  shadows: Shadows;
  darkMode: boolean;
  radius: Radius;
  transition: Required<TransitionPropertiesInputs>;
  pxToRem: (size: number) => string;
  direction: 'rtl' | 'ltr';
}

const createTheme = (options: ThemeOptions = {}): Theme => {
  const {
    breakpoints: breakpointsInput = {},
    colors: colorsInput = {},
    typography: typographyInput = {},
    spacings: spacingsInput = {},
    shadows: shadowsInput = {},
    radiuses: radiusesInput = {},
    darkMode: isDarkMode = false,
    direction = 'rtl',
    transition: transitionInputs = {},
    ...otherOptions
  } = options;

  const breakpoints = createBreakpoints(breakpointsInput);
  const colors = createColors({...colorsInput}, isDarkMode ? 'dark' : 'light');

  const typography = createTypography(typographyInput);
  const spacing = createSpacings({
    ...spacingsInput,
    pxToRem: typography.pxToRem,
  });
  const shadows = createShadows({
    ...shadowsInput,
    color: isDarkMode ? colors.white : colors.black,
    pxToRem: typography.pxToRem,
  });
  const radius = createRadiuses({
    ...radiusesInput,
    pxToRem: typography.pxToRem,
  });

  const transition = createTransitionProperties(transitionInputs);

  const theme = deepMerge(
    {
      colors,
      breakpoints,
      typography,
      spacing,
      shadows,
      radius,
      darkMode: isDarkMode,
      direction,
      pxToRem: typography.pxToRem,
      transition,
    },
    otherOptions,
  );

  return theme;
};

export default createTheme;
