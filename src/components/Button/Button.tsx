/* eslint-disable no-nested-ternary */
/* eslint-disable react/display-name */
import React, {ElementType, forwardRef} from 'react';

import {useToast} from '../../hooks/useToast';
import IconProvider from '../../providers/icomoon/IconProvider';
import * as S from './Button.styled';
import {ButtonProps} from './Button.types';

enum ButtonPosition {
  Start,
  End,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      component,
      color = 'primary',
      size = 'medium',
      textColor,
      highlightColor,
      variant = 'contained',
      to,
      fullWidth,
      href,
      startIcon,
      endIcon,
      text,
      hasHover = true,
      hasFocus,
      hasActive,
      disabled,
      type,
      onClick,
      noPadding,
      ...props
    },
    ref,
  ) => {
    const toast = useToast();
    const renderIcon = (
      icon?: string | ElementType | JSX.Element,
      position?: number,
    ) =>
      icon && typeof icon === 'string' ? (
        <S.Icon
          as={IconProvider}
          icon={icon}
          $hasChild={!!(children || text)}
          $hasEndIcon={position === ButtonPosition.End}
          $hasStartIcon={position === ButtonPosition.Start}
        />
      ) : icon ? (
        <S.Icon
          $hasChild={!!(children || text)}
          $hasEndIcon={position === ButtonPosition.End}
          $hasStartIcon={position === ButtonPosition.Start}
        >
          {icon}
        </S.Icon>
      ) : null;

    return (
      <S.Button
        onClick={() => toast()}
        as={component}
        ref={ref}
        color={color}
        size={size}
        type={type}
        textColor={textColor}
        highlightColor={highlightColor}
        variant={variant}
        to={to}
        fullWidth={fullWidth}
        href={href}
        disabled={disabled}
        hasHover={hasHover}
        hasFocus={hasFocus}
        hasActive={hasActive}
        noPadding={noPadding}
        {...props}
      >
        {renderIcon(startIcon, ButtonPosition.Start)}
        {text}
        {children}
        {renderIcon(endIcon, ButtonPosition.End)}
      </S.Button>
    );
  },
);

export default Button;
