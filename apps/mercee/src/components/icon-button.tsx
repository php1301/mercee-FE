/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { MouseEvent } from 'react';
import { IconBtnBase } from './utils/theme';

type Props = {
  className?: string;
  children: React.ReactNode | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// default props cho component, định giá trị default cho props component
const defaultProps = {
  className: '',
  disabled: false,
};

// Loại bỏ các attr trong có trong type Props ở type Native Attrs
type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;

// Type alias
export type IconButtonProps = Props & NativeAttrs;

// Cung cấp 4 giá trị thay vì giá trị tràn lan
// type FlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';

// hoặc có thể dùng Exclude để tạo type alias NonNullable
// type NonNullable<T> = Exclude<T, null | undefined>; // loại bỏ null và undefined từ T

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  disabled,
  onClick,
}) => {
  const classNames = `${IconBtnBase} ${className}`;

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick && onClick(event);
  };

  return (
    <button onClick={onClickHandler} className={classNames} disabled={disabled} type="button">
      {children}
    </button>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
