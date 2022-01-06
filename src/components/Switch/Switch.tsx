import React, {forwardRef, useImperativeHandle, useRef} from 'react';

import WithToggleWrap from '../../hoc/withToggleWrap';
import {useToggle} from '../../hooks/useToggle';
import {ToggleProps} from '../../shared/Toggle.types';
import * as S from './Switch.styled';

const Switch = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      on: controlledOn,
      onChange,
      onFocus,
      onBlur,
      onClick,
      initialOn,
      direction,
      text,
      children,
      disabled,
      required,
      id,
      hasHover = true,
      hasFocus,
      name,
      toggleColor = 'primary',
      highlightColor,
      value,
      reducer,
      readOnly,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    useImperativeHandle(ref, () => inputRef.current);
    const {on, toggle, disabledAction} = useToggle({
      on: controlledOn,
      onChange,
      initialOn,
      reducer,
      readOnly,
    });
    const disabledOnFocus = () => {
      inputRef.current.blur();
    };
    return (
      <WithToggleWrap
        subChildren={children}
        text={text}
        direction={direction}
        disabled={disabled}
      >
        <S.Wrap
          $disabled={disabled}
          $hasHover={hasHover}
          $hasFocus={hasFocus}
          $toggleColor={toggleColor}
          $highlightColor={highlightColor}
        >
          <S.Container $disabled={disabled}>
            <S.Thumb $on={on} />
            <S.Input
              checked={on}
              name={name}
              ref={ref}
              id={id}
              onChange={disabled ? disabledAction : toggle}
              onFocus={disabled ? disabledOnFocus : onFocus}
              onBlur={onBlur}
              onClick={onClick}
              type="checkbox"
              required={required}
              $disabled={disabled}
              value={value}
              readOnly={readOnly}
              {...props}
            />
            <S.Track
              $on={on}
              $toggleColor={toggleColor}
              $highlightColor={highlightColor}
            />
          </S.Container>
        </S.Wrap>
        {text ? <S.Text>{text}</S.Text> : null}
        {children}
      </WithToggleWrap>
    );
  },
);
export default Switch;
