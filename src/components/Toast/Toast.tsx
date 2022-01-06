import React, {FC} from 'react';

import Alert from '../Alert';
import {AlertSeverity} from '../Alert/Alert.types';

type ToastProps = {
  text: string;
  severity: AlertSeverity;
};

const Toast: FC<ToastProps> = ({text, severity}) => (
  <Alert text={text} severity={severity} />
);

export default Toast;
