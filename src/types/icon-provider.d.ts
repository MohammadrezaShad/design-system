/* eslint-disable @typescript-eslint/ban-types */
declare type IconSetItem = {
  properties: {
    name: string;
  };
  icon: {
    paths: string[];
    attrs: Object[];
    width?: number | string;
  };
};
declare type IconSet = {
  icons: IconSetItem[];
};
