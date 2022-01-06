import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import {WithFieldWrap} from '../../hoc';
import {useFiled} from '../../hooks/useField';
import IconProvider from '../../providers/icomoon';
import {FieldProps} from '../../shared/Field.types';
import * as S from './Field.styled';

const Field = forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      onChange,
      onFocus,
      onBlur,
      onClick,
      reducer,
      autoComplete,
      autoFocus,
      children,
      initialValue,
      disabled,
      error,
      fullWidth,
      label,
      required,
      type,
      placeholder,
      value: controlledValue,
      icon,
      onIconClick,
      variant = 'standard',
      size = 'medium',
      helperText,
      id,
      readOnly,
      success,
      ...props
    },
    ref,
  ) => {
    const {value, handleChange, disabledAction} = useFiled({
      reducer,
      value: controlledValue,
      initialValue,
      onChange,
      readOnly,
    });
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    useImperativeHandle(ref, () => inputRef.current);

    const renderHelper = () => {
      const helperType = typeof helperText;
      if (['string', 'number'].includes(helperType)) {
        return (
          <S.Help $error={error} $success={success}>
            {error ? (
              <S.ErrorIcon as={IconProvider} icon="icon-warning" />
            ) : null}
            {helperText}
          </S.Help>
        );
      }
      if (helperText) {
        return helperText;
      }
      return null;
    };

    const renderLabel = () => {
      const labelType = typeof label;
      if (['string', 'number'].includes(labelType)) {
        return <S.Label htmlFor={id}>{label}</S.Label>;
      }
      if (label) {
        return label;
      }
      return null;
    };

    const renderIcon = () => {
      if (icon && typeof icon === 'string') {
        return (
          <S.Icon
            as={IconProvider}
            icon={icon}
            onClick={disabled ? undefined : onIconClick}
            $disabled={disabled}
          />
        );
      }
      if (icon) {
        return <S.Icon $disabled={disabled}>{icon}</S.Icon>;
      }
      return null;
    };

    const disabledOnFocus = () => {
      inputRef.current.blur();
    };

    useEffect(() => {
      if (autoFocus && !disabled) {
        inputRef.current.focus();
      }
    }, [autoFocus, disabled]);

    return (
      <WithFieldWrap
        subChildren={!!children}
        label={!!label}
        helperText={!!helperText}
      >
        {renderLabel()}
        <S.Wrap $disabled={disabled}>
          <S.Field
            id={id}
            placeholder={placeholder}
            type={type}
            onFocus={disabled ? disabledOnFocus : onFocus}
            onBlur={onBlur}
            onClick={onClick}
            required={required}
            autoComplete={autoComplete}
            onChange={disabled ? disabledAction : handleChange}
            value={value}
            ref={inputRef}
            $error={error}
            $disabled={disabled}
            $icon={!!icon}
            $fullWidth={fullWidth}
            $variant={variant}
            $size={size}
            $success={success}
            readOnly={readOnly}
            {...props}
          />
          {renderIcon()}
        </S.Wrap>
        {renderHelper()}
        {children}
      </WithFieldWrap>
    );
  },
);

export default Field;

Field.displayName = 'Field';
