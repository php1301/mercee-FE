import { CTABase, CTAContent } from './utils/theme';

type CallToActionProps = {
  background?: any;
  children: React.ReactNode | undefined;
  parentClassName?: string;
  childClassName?: string;
};

const CallToAction: React.FC<CallToActionProps> = ({
  background,
  children,
  parentClassName = '',
  childClassName = '',
}) => {
  const classNames = `${CTABase} ${parentClassName} cta-base`;
  const contentClassNames = `${CTAContent} ${childClassName}`;
  return (
    <div
      className={classNames}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="component-overlay" />
      <div className={contentClassNames}>{children}</div>
    </div>
  );
};

export default CallToAction;
