import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

type ScrollBarProps = {
  className?: string;
  children: React.ReactNode;
  options?: any;
};

const Scrollbar: React.FC<ScrollBarProps> = ({
  children,
  className,
  options,
  ...props
}) => (
  <OverlayScrollbarsComponent
    options={{
      className: `${className} os-theme-thin`,
      scrollbars: {
        autoHide: 'never',
        touchSupport: false,
      },
      ...options,
    }}
    {...props}
  >
    {children}
  </OverlayScrollbarsComponent>
);

export default Scrollbar;
