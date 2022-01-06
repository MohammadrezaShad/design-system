/* eslint-disable @typescript-eslint/no-var-requires */
import React, {FC} from 'react';
import IcoMoon from 'react-icomoon';

import iconSet from './iconmoon.json';

export type IconProviderProps = {
  [name: string]: any;
  icon: string;
  color?: string | undefined;
  size?: string | number | undefined;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
};

const IconProvider: FC<IconProviderProps> = ({...props}) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default IconProvider;
