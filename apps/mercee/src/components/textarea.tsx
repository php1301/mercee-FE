/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import {
  TextBoxCommonBase,
  TextareaBase,
  TextBoxDisable,
  TextBoxEnable,
} from './utils/theme';

export interface Props {
  value?: string;
  initialValue?: string;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean ;
  className?: string ;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>)=>void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;

}

export const defaultProps = {
  disabled: false,
  readOnly: false,
  className: '',
  placeholder: '',
  initialValue: '',
};

type NativeAttrs = Omit<React.TextareaHTMLAttributes<any>, keyof Props>;

export type TextareaProps = NativeAttrs & Props;

// Typing Props with a Function Declaration

// type Props = {
//     name: string;
//   }
//   function MyComponent({ name }: PropsWithChildren<Props>): React.ReactNode {
//     return <h1>{children}, {name}!</h1>
//   }

// Sử dụng nếu không muốn type declare children, automatic add children to type
// Đỡ phải define lại ở mỗi type
// https://www.newline.co/@bespoyasov/how-to-define-props-with-children-in-react-typescript-app--56bd18be

const Textarea: React.FC<React.PropsWithChildren<TextareaProps>> = ({
  className,
  value,
  initialValue,
  disabled,
  readOnly,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [initValue, setInitValue] = useState<string>(initialValue);

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled || readOnly) return;
    setInitValue(event.target.value);
    onChange && onChange(event);
  };
  const focusHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    onFocus && onFocus(e);
  };
  const blurHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (value === undefined) return;
    setInitValue(value);
  }, [value]);

  const classNames = `${TextBoxCommonBase
  } ${
    TextareaBase
  } ${
    disabled === true ? TextBoxDisable : TextBoxEnable
  } ${
    className}`;

  return (
    <textarea
      placeholder={placeholder}
      className={classNames}
      value={initValue}
      disabled={disabled}
      readOnly={readOnly}
      onChange={changeHandler}
      onFocus={focusHandler}
      onBlur={blurHandler}
      autoComplete="off"
      {...props}
    />
  );
};

Textarea.defaultProps = defaultProps;

export default Textarea;
