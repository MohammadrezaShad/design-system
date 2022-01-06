import 'styled-components';

import {DefaultTheme as Theme} from '../styles/defaultTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
