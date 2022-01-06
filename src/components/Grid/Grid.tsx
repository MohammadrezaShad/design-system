import React, {FC} from 'react';

import * as S from './Grid.styled';
import {GridProps} from './Grid.types';

const Grid: FC<GridProps> = props => {
  const {
    container,
    item,
    children,
    justify,
    alignContent,
    alignItems,
    component,
    direction,
    wrap,
    zeroMinWidth,
    xlg,
    lg,
    md,
    sm,
    xs,
    xxs,
    spacing,
  } = props;
  return (
    <S.Grid
      as={component}
      container={container}
      item={item}
      justify={justify}
      alignContent={alignContent}
      alignItems={alignItems}
      direction={direction}
      wrap={wrap}
      zeroMinWidth={zeroMinWidth}
      xxs={xxs}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xlg={xlg}
      spacing={spacing}
    >
      {children}
    </S.Grid>
  );
};

export default Grid;
