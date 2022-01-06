/* eslint-disable arrow-body-style */
import React, {FC} from 'react';

import IconProvider from '../../providers/icomoon';
import Button from '../Button';
import * as S from './Alert.styled';
import {AlertProps} from './Alert.types';

const Alert: FC<AlertProps> = ({
  severity = 'info',
  action,
  title,
  text,
  children,
  icon,
  hasIcon = true,
  onClick,
  variant = 'standard',
  bottomContent,
}) => {
  const renderIcon = () => {
    if (hasIcon && !icon) {
      return (
        <S.IconWrap>
          <S.Icon
            as={IconProvider}
            icon={getAlertDefaultIcon()}
            $severity={severity}
            $variant={variant}
          />
        </S.IconWrap>
      );
    }
    if (hasIcon && typeof icon === 'string') {
      return (
        <S.IconWrap>
          <S.Icon as={IconProvider} icon={icon} $severity={severity} />
        </S.IconWrap>
      );
    }
    return icon;
  };

  const getAlertDefaultIcon = () => {
    switch (severity) {
      case 'success':
        return 'icon-tick-circle';
      case 'error':
        return 'icon-danger';
      case 'warning':
        return 'icon-warning';
      case 'info':
      default:
        return 'icon-info';
    }
  };
  const renderAction = () => {
    if (action && typeof action === 'string') {
      return (
        <S.Action>
          <Button
            variant={variant === 'filled' ? 'text' : 'outlined'}
            color={variant === 'filled' ? 'surface' : getAlertActionColor()}
            onClick={onClick}
          >
            {action}
          </Button>
        </S.Action>
      );
    }
    return action;
  };

  const getAlertActionColor = () => {
    switch (severity) {
      case 'success':
        return 'success';
      case 'error':
        return 'danger';
      case 'warning':
        return 'warning';
      case 'info':
      default:
        return 'info';
    }
  };

  return (
    <S.Alert
      $variant={variant}
      $severity={severity}
      $bottomContent={!!bottomContent}
    >
      <S.Wrap>
        {renderIcon()}
        {title || text ? (
          <S.Head>
            {title ? <S.Title $variant={variant}>{title}</S.Title> : null}
            {text ? <S.Text $variant={variant}>{text}</S.Text> : null}
          </S.Head>
        ) : null}
        {renderAction()}
      </S.Wrap>
      {bottomContent ? <S.Bottom>{bottomContent}</S.Bottom> : null}
      {children}
    </S.Alert>
  );
};

export default Alert;
