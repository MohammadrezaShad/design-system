import Color from 'color';

const shadowOpacity = 0.16;

export type ShadowInputs = {
  small?: ShadowType;
  medium?: ShadowType;
  large?: ShadowType;
  xLarge?: ShadowType;
  color: Color | string;
  pxToRem: (size: number) => string;
};

export type CreateShadowInputs = {
  xPos: string;
  yPos: string;
  blur: string;
  color: Color | string;
};

export type ShadowType = {
  xPos: number;
  yPos: number;
  blur: number;
  color: Color | string;
};

export type Shadows = {
  small: string;
  medium: string;
  large: string;
  xLarge: string;
};

const createShadowVariant = ({xPos, yPos, blur, color}: CreateShadowInputs) =>
  `${xPos} ${yPos} ${blur} ${color}`;

const createShadows = (shadowInputs: ShadowInputs): Shadows => {
  const color = Color(shadowInputs.color).alpha(shadowOpacity).rgb().string();
  const {
    pxToRem,
    small = {
      xPos: 0,
      yPos: 1,
      blur: 3,
      color,
    },
    medium = {
      xPos: 0,
      yPos: 3,
      blur: 6,
      color,
    },
    large = {
      xPos: 0,
      yPos: 6,
      blur: 12,
      color,
    },
    xLarge = {
      xPos: 0,
      yPos: 12,
      blur: 24,
      color,
    },
  } = shadowInputs;

  const createRemInputs = (shadowInput: ShadowType) => {
    const {xPos, yPos, blur, color: inputColor} = {...shadowInput};
    return {
      xPos: pxToRem(xPos),
      yPos: pxToRem(yPos),
      blur: pxToRem(blur),
      color: inputColor,
    };
  };

  const smallRemInputs = createRemInputs({...small});
  const mediumRemInputs = createRemInputs({...medium});
  const largeRemInputs = createRemInputs({...large});
  const xLargeRemInputs = createRemInputs({...xLarge});

  const smallShadow = createShadowVariant({...smallRemInputs});
  const mediumShadow = createShadowVariant({...mediumRemInputs});
  const largeShadow = createShadowVariant({...largeRemInputs});
  const xLargeShadow = createShadowVariant({...xLargeRemInputs});

  return {
    small: smallShadow,
    medium: mediumShadow,
    large: largeShadow,
    xLarge: xLargeShadow,
  };
};

export default createShadows;
