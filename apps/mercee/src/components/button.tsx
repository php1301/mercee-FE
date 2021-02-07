/* eslint-disable react/button-has-type */
import React, { MouseEvent } from 'react';
import { ButtonVariants, ButtonSizes } from './utils/prop-types';
import {
  ButtonBase,
  ButtonDisable,
  ButtonVariant,
  ButtonSize,
} from './utils/theme';

interface Props {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  type?: React.ButtonHTMLAttributes<any>['type']; // lay attr type
  children: React.ReactNode | undefined;
  onClick? : React.MouseEventHandler<HTMLButtonElement> // type onClick khi click vao button
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const defaultProps = {
  variant: 'primary' as ButtonVariants, // type-assertion dung as khi khong the dung <type>
  size: 'normal' as ButtonSizes,
  type: 'button' as React.ButtonHTMLAttributes<any>['type'],
  loading: false,
  disabled: false,
};

// Override default button attr
type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;

type ButtonProps = NativeAttrs & Props;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className,
  loading,
  variant,
  size,
  type,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const classNames = `${ButtonBase
  } ${
    disabled === true ? ButtonDisable : ButtonVariant[variant]
  } ${
    ButtonSize[size]
  } ${
    className}`;

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onClick && onClick(event);
  };
  return (
    <button
      onClick={onClickHandler}
      className={classNames}
      disabled={disabled}
      type={type}
      aria-label={type}
      {...props}
    >
      {!loading && children}
      {loading && (
        <div
          className="h-5 w-5 border-3px border-gray-800 border-t-3px rounded-full animate-spin"
          style={{ borderTopColor: '#f1f1f1' }}
        />
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
