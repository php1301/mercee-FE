/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {
  useEffect, useImperativeHandle, useRef, useState,
} from 'react';
import {
  TextBoxCommonBase,
  InputBase,
  TextBoxDisable,
  TextBoxEnable,
} from 'components/utils/theme';

export interface Props {
  value?: string,
  initialValue?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) =>void
  onBlur?: (e:React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e:React.FocusEvent<HTMLInputElement>) => void
  [key: string]: unknown // Index Signature - https://basarat.gitbook.io/typescript/type-system/index-signatures
  //   Strict các value còn lại có thuộc tính tên key và key giá trị là string
  //   sử dụng để được spread props
}

export const defaultProps = {
  disabled: false,
  readOnly: false,
  className: '',
  placeholder: '',
  initialValue: '',
};

type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>;

export type InputPropsType = Props & NativeAttrs;

// Trỏ reference(ref) của cha sang con, đứa nhận ref ở đây là label
// Những component hay sử dụng
// Cần thao túng các trạng thái của nó
// Hoặc các children của nó bị ảnh hưởng như ô Input
// Thì ta nên forwardRef để tăng tính reusability
// Tăng tính tương tác ở các mặt nào đó
// Mà reuse nhất có thể
const Input = React.forwardRef<HTMLInputElement, React.PropsWithChildren<InputPropsType>>(
  (
    {
      className,
      id,
      value,
      name,
      initialValue,
      disabled,
      readOnly,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      ...props
    }, ref: React.Ref<HTMLInputElement|null>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Để access children properties
    // Arg 1, cha của ref con, đã được exposed - truyền ref
    // Arg 2, data chứa giá trị của con
    // ref được init từ thằng cha render con đã forward ref
    // Sẽ có quyền initRef.current() để lấy giá trị
    // Tóm lại là gọi phương thức của con từ cha
    // Usage: kiểu mình được tùy ý cho nó focus, blur, hover hay gì đó
    useImperativeHandle(ref, () => inputRef.current);
    const [initValue, setInitValue] = useState<string>(initialValue);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;
      setInitValue(event.target.value);
      onChange && onChange(event);
    };

    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      onFocus && onFocus(event);
    };
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur && onBlur(event);
    };

    // trả lại value nếu value không undefined và thay đổi

    useEffect(() => {
      if (value === undefined) return;
      setInitValue(value);
    }, [value]);
    const classNames = `${InputBase
    } ${
      TextBoxCommonBase
    } ${
      disabled === true ? TextBoxDisable : TextBoxEnable
    } ${
      className}`;

    return (
      <>
        <label htmlFor={id} className="sr-only">
          {name}
        </label>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          className={classNames}
          id={name}
          value={initValue}
          disabled={disabled}
          readOnly={readOnly}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          autoComplete="off"
          name={name}
          {...props}
        />
      </>
    );
  },
);

Input.defaultProps = defaultProps;

export default Input;
