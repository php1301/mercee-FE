import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

interface ActiveLinkProps {
  activeClassName?: string;
  href?: string;
  children: any // o day t can đổi type của children để handle
  [key: string]: unknown;
}

// override type children của PropsWithChildren
const ActiveLink: React.FC<React.PropsWithChildren<ActiveLinkProps>> = ({
// const ActiveLink: React.FC<ActiveLinkProps> = ({
  children, activeClassName, href, test, ...rest
}) => {
  const { pathname } = useRouter();
  //   Verifies that children has only one child (a React element) and returns it.
  //    Otherwise this method throws an error.
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className = pathname === href
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link href={href} {...rest}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
