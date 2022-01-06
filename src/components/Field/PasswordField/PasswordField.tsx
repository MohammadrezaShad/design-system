import React, {forwardRef, useState} from 'react';

import {FieldProps} from '../../../shared';
import Field from '../Field';

const PasswordField = forwardRef<HTMLInputElement, FieldProps>(
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
      label = 'رمز عبور',
      required,
      placeholder,
      value,
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
    const eyeOpenIcon = 'icon-eyeOpen';
    const eyeCloseIcon = 'icon-eyeClose';
    const textType = 'text';
    const passwordType = 'password';

    const [icon, setIcon] = useState(eyeOpenIcon);
    const [type, setType] = useState(passwordType);

    const onIconClick = () => {
      setIcon(icon === eyeOpenIcon ? eyeCloseIcon : eyeOpenIcon);
      setType(type === passwordType ? textType : passwordType);
    };

    return (
      <>
        <Field
          onIconClick={onIconClick}
          autoFocus={autoFocus}
          initialValue={initialValue}
          icon={icon}
          id={id}
          placeholder={placeholder}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
          required={required}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
          reducer={reducer}
          error={error}
          disabled={disabled}
          fullWidth={fullWidth}
          variant={variant}
          size={size}
          readOnly={readOnly}
          label={label}
          helperText={helperText}
          ref={ref}
          success={success}
          {...props}
        >
          {children}
        </Field>
      </>
    );
  },
);

export default PasswordField;
PasswordField.displayName = 'PasswordField';
